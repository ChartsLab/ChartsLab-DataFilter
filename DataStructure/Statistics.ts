/**
 * @author: **HE**-Labs
 * @name: **StatUtil**
 * @description: Statistics method for making analysis as piece of cake, this class take only **vectors** to play on
 */
class StatUtil {
    private Vector: number[] = null;
    private Stats: number[] = [];
    private FixNum: number = 4
    /**
     * 
     */
    public Properties = function (): object {
        var len = this.Vector.length;
        return {
            type: "VECTOR",
            length: len
        };
    };

    /**
     * 
     */
    public SetVector = function (array, type = Float32Array): void {
        this.Vector = new type(array);
    };

    /**
     * 
     */
    public Mean = function (): number {
        this.Stats['Stat.Mean'] = 0;
        this.Stats['Stat.Mean'] = (this.Sum() / this.Vector.length).toFixed(this.FixNum);
        return this.Stats['Stat.Mean'];
    }

    /**
     * 
     */
    public Sum = function (): number {
        var count: number = 0;
        for (var i: number = 0; i < this.Vector.length; i++) {
            count += this.Vector[i];
        }
        return count;
    };

    public Median = function (): void {};
    public GeoMean = function (): void {};
    public MeanSqError = function (): void {};
    public Variance = function (): void {};
    public Deviation = function (): void {};
    public StdDev = function (): void {};
    public MeanDev = function (): void {};
    public MedianDev = function (): void {};
    public CoefVar = function (): void {};
    public LowerQuartile = function (): void {};
    public UpperQuartile = function (): void {};
    public UpperWisker = function (): void {};
    public Percentile = function (): void {};
    public Histogram = function (): void {};
    public Covariance = function (): void {};
    public CorrCoef = function (): void {};
    public SpearmanCoef = function (): void {};
    public StanMoment = function (): void {};
    public Skewness = function (): void {};
    
    public Mode = function (): void {};
    public SumSq = function (): void {};

};