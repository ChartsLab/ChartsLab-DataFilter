# ChartsLab-DataFilter
The basic data model used by **Charts-Lab** is tabular data, similar to a spreadsheet or database table. Individual data sets are assumed to contain a collection of records (or “rows”), which may contain any number of named data attributes (fields, or “columns”). Records are modeled using standard JavaScript objects.



# Installing
You can Download the latest release. You can also load directly from charts-lab.org, either as a standalone library or as part of ChartsLab 1.0.
  ```js
  <script src="./DirectoryFile/DataStructure.js"></script>
  <script>
    var df = new Table();
  </script>
  ```

# API Reference

* <a href="https://github.com/ChartsLab/ChartsLab-DataFilter/blob/master/README.md#data">Data</a>
* <a href="https://github.com/ChartsLab/ChartsLab-DataFilter/blob/master/README.md#search">Search</a>
* <a href="https://github.com/ChartsLab/ChartsLab-DataFilter/blob/master/README.md#transformation">Transformation</a>

## Data

In this Class all we care about is how to get the data in a simplest form and with less cost, So this class including method like:
* ParseFrame (options)
it takes a string in csv, tsv, JSON (coming soon) and transform it to a tabular data structure that can be manipulated and make operation in it.

**Parameters**: JSON OBJECT
    * **data**: contain string taken from csv, tsv, JSON (coming soon) files.
    * **lineDel**: Line Delemeter if CSV file.
    * **cellDel**: Cell Delemeter if CSV file.
    * **header**: Boolean indicates if header exist in data files.
    * **names**: if you put names for dataset columns.
  ```js
  var Ds = new DataStruct();
  Ds.ParseFrame({
      data: DataSet_String,
  });
  console.log(Ds.Frame());
  ```

* RowNum
* ColNum
* Frame
* GetColumn
* GetRow
* Shape
* Describe
* Info
