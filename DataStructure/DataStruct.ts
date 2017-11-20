class Table {
    
    private DataFrame: any[] = [];              //  DATA WILL BE STORED HERE
    private FrameHeader: any[] = [];            //  DATA HEADER/COLS NAMES WILL BE STORED HERE
    private FrameLength: number = 0;            //  DATA ROWS NUM 
    private FrameHeaderFlag: boolean = true;    //  FLAG INDICATES HEADER EXISTANCE

    /**
     * @author: **HE**-Labs
     * @name: ParseFrame
     * @description: taking data object like CSV, TSV, JSON string and parse it to data frame stored in **Table** class
     * @params: options **JSON**
     */
    public ParseFrame = function (options: JSON): void {
        // PARSING OPTIONS AND INITS VARIABLES
        var data = options["data"] || "", 
            lines = [], cells = [], 
            lineDelimiter = options["lineDel"] || '\n', 
            cellDelimiter = options["cellDel"] || ',';

        this.FrameHeaderFlag = options["header"] || true;
        lines = data.split(lineDelimiter);
        this.FrameLength = lines.length;
        if(this.FrameHeaderFlag === true){
            this.FrameHeader = lines[0].split(cellDelimiter);
            lines.shift();
            this.FrameLength --;
        }else{
            if (Array.isArray(options["names"])) {
                this.FrameHeader = options["names"];
            }
        }
        for (var i = 0; i < this.FrameLength; i++) {
            cells = lines[i].split(cellDelimiter);
            this.DataFrame.push(cells);
        }
        return;
    };

    /**
     * @author: **HE**-Labs
     * @name: RowsCount
     * @description: Getting the Row **count** of the **dataframe**
     * @parameters: **None**
     * @return: Row Count **Number**
     */
    public RowsCount = function (): number {
        return this.FrameLength;
    };

    /**
     * @author: **HE**-Labs
     * @name: ColsCount
     * @description: Getting the Col **count** of the **dataframe**
     * @parameters: **None**
     * @return: Col Count **Number**
     */
    public ColsCount = function (): number {
        return this.FrameHeader.length;
    };

    /**
     * @author: **HE**-Labs
     * @name: Frame
     * @description: Getting the **DataFrame**
     * @parameters: **None**
     * @return: **DataFrame**
     */
    public Frame = function (): any {
        return this.DataFrame;
    };

    /**
     * @author: **HE**-Labs
     * @name: GetColumn
     * @description: Getting the **DataFrame** Specific Column, default is **Count** Column
     * @parameters: **None**
     * @return: **DataFrame** Column
     */
    public GetColumn = function (Name = "Count"): any {
        var colNum = this.FrameHeader.indexOf(Name);
        var colData = [];
        for (var i = 0; i < this.DataFrame.length; i++) {  //  ENHANCE
            colData[i] = [this.DataFrame[i][colNum]];
        }
        return colData;
    };

    /**
     * @author: **HE**-Labs
     * @name: GetRow
     * @description: Getting the **DataFrame** Specific number of Rows, default is **0** `(First Row)`
     * @parameters: **None**
     * @return: **DataFrame** Rows
     */
    public GetRow = function (Number:number = 0):any {
        return this.DataFrame[Number];
    };

    /**
     * @author: **HE**-Labs
     * @name: Header
     * @description: Getting the **DataFrame** *First* number of Rows, default is `5`
     * Example:
     * ```js
     * var df = new Table();
     * df.ParseFrame(options)
     * df.Header(); \\ Returns Data
     * ```
     * @parameters: **None**
     * @return: **DataFrame** Rows
     */
    public Header = function (Count = 5):any {
        var dataframe = [];
        for(var i:number = 0; i < Count; i++){
            dataframe[i] = this.DataFrame[i];
        }
    };

    /**
     * @author: **HE**-Labs
     * @name: Shape
     * @description: Getting the **DataFrame** Shape
     * @parameters: **DataFrame** Optional
     * @return: **Array**
     */
    public Shape = function (a = this.DataFrame): number[] { // ENHANCE
        if (a instanceof Array) {
            // First element is an array
            var sublength = this.GetDimension(a[0]);
            if (sublength === false) {
                // Dimension is different
                return [NaN, NaN];
            }else {
                // Compare every element to make sure they are of the same dimensions
                for (var i = 1; i < a.length; i++) {
                    var _sublength = this.GetDimension(a[i]);
                    // HACK: compare arrays...
                    if (_sublength === false || sublength.join(",") !== _sublength.join(",")) {
                        // If the dimension is different (i.e. not rectangular)
                        return [NaN,NaN];
                    }
                }
                // OK now it is "rectangular" (could you call 3d "rectangular"?)
                return [a.length].concat(sublength);
            }
        }else {
            //  NOT AN ARRAY
            return [NaN];   //  NEED ERROR HANDLE
        }
    };

    public Describe = function(): void {};
    public Info = function(): void {};
}