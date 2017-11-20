# ChartsLab-DataFilter
The basic data model used by **Charts-Lab** is tabular data, similar to a spreadsheet or database table. Individual data sets are assumed to contain a collection of records (or “rows”), which may contain any number of named data attributes (fields, or “columns”). Records are modeled using standard JavaScript objects.



# Installing
You can Download the latest release. You can also load directly from charts-lab.org, either as a standalone library or as part of ChartsLab 1.0.
  ```js
  <script src="./DirectoryFile/DataStructure.js"></script>
  <script>
    var df = new DataStruct();
  </script>
  ```

# API Reference

* <a href="https://github.com/ChartsLab/ChartsLab-DataFilter/blob/master/README.md#data">Data</a>
  * <a href="#parseframeoptions">ParseFrame</a>
  * <a href="#rowscount">RowsCount</a>
  * <a href="#colscount">ColsCount</a>
  * <a href="#frame">Frame</a>
  * <a href="#getcolumncolname">GetColumn</a>
  * <a href="#getrowrownum">GetRow</a>
  * <a href="#headerrownum">Header</a>
  * <a href="#shape">Shape</a>
  * <a href="#info">Info</a>
* <a href="https://github.com/ChartsLab/ChartsLab-DataFilter/blob/master/README.md#search">Search</a>
* <a href="https://github.com/ChartsLab/ChartsLab-DataFilter/blob/master/README.md#transformation">Transformation</a>

## Data

In this Class all we care about is how to get the data in a simplest form and with less cost, So this class including method like:
### ParseFrame(options)
it takes a string in csv, tsv, JSON (coming soon) and transform it to a tabular data structure that can be manipulated and make operation in it.

**Parameters**: JSON OBJECT

  * **data**: contain string taken from csv, tsv, JSON (coming soon) files.
  * **lineDel**: Line Delemeter if CSV file. **Optional**
  * **cellDel**: Cell Delemeter if CSV file. **Optional**
  * **header**: Boolean indicates if header exist in data files. **Optional**
  * **names**: if you put names for dataset columns. **Optional**
    
  ```js
  var DataSet_String = "1,Foo,42\n2,Bar,33";
  
  var Ds = new DataStruct();
  Ds.ParseFrame({
      data: DataSet_String,
      lineDel: '\n',
      cellDel: ',',
      header: False,
      names: ['id', 'name', 'age']
  });
  console.log(Ds.Frame());
  ```

### RowsCount()
Return Rows count of the dataframe. 
**no parameters**, and **return a number**
```js
 console.log(Ds.RowsCount());
```

### ColsCount()
Return Columns count of the dataframe. 
**no parameters**, and **return a number**
```js
 console.log(Ds.ColsCount());
```

### Frame()
Return the DataFrame in in a 2D Array.
**no parameters**, and **return a 2D Array**

### GetColumn(ColName)
Getting the **DataFrame** Specific Column, default is **Count** Column
```js
Ds.GetColumn(ColumnName)
```

### GetRow(RowNum)
Getting the **DataFrame** Specific number of Rows, default is **0** `(First Row)`
```js
Ds.GetRow(RowNum)
```

### Header(RowNum)
Getting the **DataFrame** *First* number of Rows, default is `5`
```js
     var df = new DataStruct();
     df.ParseFrame(options)
     df.Header(); \\ Returns Data
```

### Shape()
Getting the **DataFrame** Shape or Dimension (ColNum, RowNum)
**no parameters**, and **returns Array**

### Info()
Returning a **DataFrame** Info
