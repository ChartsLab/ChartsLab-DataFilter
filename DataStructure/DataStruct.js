var Table = /** @class */ (function () {
    function Table() {
        this.DataFrame = []; //  DATA WILL BE STORED HERE
        this.FrameHeader = []; //  DATA HEADER/COLS NAMES WILL BE STORED HERE
        this.FrameLength = 0; //  DATA ROWS NUM 
        this.FrameHeaderFlag = true; //  FLAG INDICATES HEADER EXISTANCE
        /**
         * @author: **HE**-Labs
         * @name: ParseFrame
         * @description: taking data object like CSV, TSV, JSON string and parse it to data frame stored in **Table** class
         * @params: options **JSON**
         */
        this.ParseFrame = function (options) {
            // PARSING OPTIONS AND INITS VARIABLES
            var data = options["data"] || "", lines = [], cells = [], lineDelimiter = options["lineDel"] || '\n', cellDelimiter = options["cellDel"] || ',';
            this.FrameHeaderFlag = options["header"] || true;
            lines = data.split(lineDelimiter);
            this.FrameLength = lines.length;
            if (this.FrameHeaderFlag === true) {
                this.FrameHeader = lines[0].split(cellDelimiter);
                lines.shift();
                this.FrameLength--;
            }
            else {
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
        this.RowsCount = function () {
            return this.FrameLength;
        };
        this.ColsCount = function () {
            return this.FrameHeader.length;
        };
        /**
         * @author: **HE**-Labs
         * @name: Frame
         * @description: Getting the **DataFrame**
         * @parameters: **None**
         * @return: **DataFrame**
         */
        this.Frame = function () {
            return this.DataFrame;
        };
        /**
         * @author: **HE**-Labs
         * @name: GetColumn
         * @description: Getting the **DataFrame** Specific Column
         * @parameters: **None**
         * @return: **DataFrame** Column
         */
        this.GetColumn = function (Name) {
            if (Name === void 0) { Name = "Count"; }
            var colNum = this.FrameHeader.indexOf(Name);
            var colData = [];
            for (var i = 0; i < this.DataFrame.length; i++) {
                colData[i] = [this.DataFrame[i][colNum]];
            }
            return colData;
        };
        /**
         * @author: **HE**-Labs
         * @name: Shape
         * @description: Getting the **DataFrame** Shape
         * @parameters: **DataFrame** Optional
         * @return: **Array**
         */
        this.Shape = function (a) {
            if (a === void 0) { a = this.DataFrame; }
            if (a instanceof Array) {
                // First element is an array
                var sublength = this.GetDimension(a[0]);
                if (sublength === false) {
                    // Dimension is different
                    return [NaN, NaN];
                }
                else {
                    // Compare every element to make sure they are of the same dimensions
                    for (var i = 1; i < a.length; i++) {
                        var _sublength = this.GetDimension(a[i]);
                        // HACK: compare arrays...
                        if (_sublength === false || sublength.join(",") !== _sublength.join(",")) {
                            // If the dimension is different (i.e. not rectangular)
                            return [NaN, NaN];
                        }
                    }
                    // OK now it is "rectangular" (could you call 3d "rectangular"?)
                    return [a.length].concat(sublength);
                }
            }
            else {
                //  NOT AN ARRAY
                return [NaN]; //  NEED ERROR HANDLE
            }
        };
        this.Describe = function () { };
        this.Info = function () { };
    }
    return Table;
}());
