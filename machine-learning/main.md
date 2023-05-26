# Machine Learning

## Sections

-  [Terminology](#terminology)
   -  [Labels](#labels)
   -  [Features](#features)
   -  [Examples](#examples)
   -  [Models](#models)

---

## Terminology

### Labels

**Labels** are variables that being predicted

Mathematically it is represented by the variable $y$

E.g. An email can be sorted at spam or not spam

### Features

**Features** are variables that describe the data

Mathematically it is represented by the variable $\{x_1,x_2,...,x_n\}$

E.g. A feature could be the to and from address or words inside the body

### Examples

**Examples** are a particular instance of data, $x$

There are two types of examples:

-  labeled examples
-  unlabeled examples

**Labeled examples** are used to train the model

It has a feature and a label $(x,y)$

**Unlabeled examples** are used to make predictions on new data

It has features but there isn't a label attached to it $(x,?)$

### Models

**Models** maps examples to predict labels $y'$

They are defined by internal parameters, which are learned

---
