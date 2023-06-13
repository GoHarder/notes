# MongoDB <!-- omit in toc -->

## Sections <!-- omit in toc -->

- [Aggregations](#aggregations)
  - [Sort a Sub-Array](#sort-a-sub-array)
- [Data Snippets](#data-snippets)

---

## Aggregations

### Sort a Sub-Array

This will be replaced with $sortArray in version 5.2

```js
{
   field: {
      $reduce: {
         input: '$inputArray',
         initialValue: [],
         in: {
            $let: {
               vars: {
                  output: '$$value', // The output array
                  element: '$$this', // The element being sorted
                  size: { $size: '$$value' } // The size of the output array
               },
               in: {
                  $let: {
                     vars: {
                        position: {
                           $reduce: {
                              input: { $range: [0, '$$size'] }, // [0,1,2,...]
                              initialValue: '$$size',
                              in: {
                                 $cond: {
                                    if: {
                                       $let: {
                                          vars: {
                                             // The element that is being compared to the element above
                                             compare: { $arrayElemAt: ['$$output', '$$this'] },
                                          },
                                          // This is where the sorting happens below its sorting by the _diff property
                                          // You can customize this
                                          in: { $lt: ['$$element._diff', '$$compare._diff'] }
                                       }
                                    },
                                    then: { $min: ['$$value', '$$this'] },
                                    else: '$$value'
                                 }
                              }
                           }
                        }
                     }
                     in: {
                        // This is the section wehere the sorted array is built
                        $concatArrays: [
                           { $cond: { if: { $eq: [0, '$$position'] }, then: [], else: { $slice: ['$$output', 0, '$$position'] } } },
                           ['$$element'],
                           { $cond: { if: { $gt: ['$$size', 0] }, then: { $slice: ['$$output', '$$position', '$$size'] }, else: [] } }
                        ]
                     }
                  }
               }
            }
         }
      }
   }
}
```

## Data Snippets

Some javascript functions that are useful to work with Mongodb documents

```js
/**
 * It takes an array of documents and returns an array of documents with the `_id` property converted
 * from an object to a string.
 * @param docs - The array of documents to be processed.
 */
const peelId = (docs) =>
   docs.map((doc) => {
      doc._id = doc._id.$oid;
      return doc;
   });

/**
 * It sorts an array of objects by the value of the `name` property.
 * @param docs - The array of documents to sort.
 */
const sortName = (docs) =>
   docs.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
   });  
```