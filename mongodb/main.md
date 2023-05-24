# MongoDB

## Sections

-  [Aggregations](#aggregations)

---

## Aggregations

### Sort a sub array

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
