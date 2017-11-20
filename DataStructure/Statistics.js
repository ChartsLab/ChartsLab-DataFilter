/**
 * @author: **HE**-Labs
 * @name: **StatUtil**
 * @description: Statistics method for making analysis as piece of cake, this class take only **vectors** to play on
 */
var StatUtil = /** @class */ (function () {
    function StatUtil() {
        this.Vector = null;
        this.Stats = [];
        this.FixNum = 4;
        /**
         *
         */
        this.Properties = function () {
            var len = this.Vector.length;
            return {
                type: "VECTOR",
                length: len
            };
        };
        /**
         *
         */
        this.SetVector = function (array, type) {
            if (type === void 0) { type = Float32Array; }
            this.Vector = new type(array);
        };
        /**
         *
         */
        this.Mean = function () {
            this.Stats['Stat.Mean'] = 0;
            this.Stats['Stat.Mean'] = (this.Sum() / this.Vector.length).toFixed(this.FixNum);
            return this.Stats['Stat.Mean'];
        };
        /**
         *
         */
        this.Sum = function () {
            var count = 0;
            for (var i = 0; i < this.Vector.length; i++) {
                count += this.Vector[i];
            }
            return count;
        };
        this.Median = function () { };
        this.GeoMean = function () { };
        this.MeanSqError = function () { };
        this.Variance = function () { };
        this.Deviation = function () { };
        this.StdDev = function () { };
        this.MeanDev = function () { };
        this.MedianDev = function () { };
        this.CoefVar = function () { };
        this.LowerQuartile = function () { };
        this.UpperQuartile = function () { };
        this.UpperWisker = function () { };
        this.Percentile = function () { };
        this.Histogram = function () { };
        this.Covariance = function () { };
        this.CorrCoef = function () { };
        this.SpearmanCoef = function () { };
        this.StanMoment = function () { };
        this.Skewness = function () { };
        this.Mode = function () { };
        this.SumSq = function () { };
    }
    return StatUtil;
}());
;
