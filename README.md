## csv2json

Convert csv files to JSON
### Usage

```
csv2json [# of columns] [input file] [output file]
```

Currently it requires the csv to follow this formatting
```
col1,col2,col3,dataA1,dataB1,dataC1,dataA2,dataB2,dataC2
```
This first 3 values are the titles of the columns, the next 6 are the actual data.
This provides the following output:
```
{
    "0": {
        "col1":"dataA1",
        "col2":"dataB1",
        "col3":"dataC1"
    },
    "1": {
        "col1":"dataA2",
        "col2":"dataB2",
        "col3":"dataC2"
    }
}
```
When executed as with
```
csv2json 3 test.csv output.json
```

### Todo

* Allow custom value separator
* Non-cli usage
* Custom Ids

### License

MIT
