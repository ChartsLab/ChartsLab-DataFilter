# ChartsLab-DataFilter
In This Side You have more than one way to modify your data ( Statistic , Matrix Operations , Sampling , Margine , Data Preparation ,Sampling ) Way or you can use Default matrixis like (Eye , Zeros , Digonal ) Matrixs 
## The Data Filter Files :
1. Matrix Genration File ( Class ) :
  - It is Consists of all Defailt Matrices like 
     1. Zeros Matrix :
      - This Function take number of rows and number of columns and it will generate a Matrix that is consists of zeros rows and numbers .
      ~~~~
      Zeros = function (rows , cols) : and it return Matrix like :
      MatrxixGen.Zeros(3,2):
      will generate :
      [[0,0,0],[0,0,0]].
      ~~~~
     2. Eye Matrix :
      - This Function take number of rows and number of rows and columns and it will generate a Matrix that is consists of Identity matrix only digonal will be ones and the rest will be Zeros .
      ~~~~
      Eye = function (rows , cols) : and it return Identity Matrix like :
      MatrixGen.Eye(2,2):
      will generate : 
      [[1,0],[0,1]]
      ~~~~
     3. Digonal Matrix :
      - This Function take number of rows and numbers of rows and columns and it will generate a Matrix that is consists of Diagonal Matrix it like Identity one but the diagonal is numbers  .
      ~~~~
      Digonal = function(rows , cols ) and the Digonal Vector : and it return Digonal Matrix like :
      Array = [1,2,3]
      MatrixGeen.Digonal(3,3) , MatrixGen.Vector(Array):
      Will generate :
      [[1,0,0],[0,2,0],[0,0,3]].
      ~~~~
     4. MatrixMaker :
      - It is Function that take **Atleast ** Two Vectors and combine them and get matrix of them .
      ~~~~
      MatrixMaker = function(Vector_1 , Vector_2 , .... , Vector_n ) : return matrix of [Vector_1 , Vector_2 , ... , Vector_n] .
      Vector1 = [1,2,4,5]
      Vector2= [3,4,5,6]
      MatrixGen.MatrixMaker(Vector1,Vector2 ).
      it will generate :
      [[1,3],[2,4],[4,5],[5,6]]
      ~~~~
      ------
 2. Matrix Operation File (Class) :
  - It is Consists of all Matrix and Vectors Operations like :
    1. Vector Multiplying : 
      - This Function take Two Vectors and those two Vectors Should be conform .
      ~~~~
      VectorMultiply = function(Vector) and The Vector that we need to multiply it : and it return NewVector that is comming from multiplication .
      MatrixOperation.Vector = [1,2,3,4]
      Array =[1,2,3,4] 
      MatrixOperation.VectorMultiply(Array).
      Will generate :
      [1,4,9,16]
      ~~~~
    2. Dot Product :
      - This function is as like as Vector Multiplying but it isn't return Vector it return the summation the Multiplying Vectors .
      
     
      ~~~~
      K = Vector length  
      sum_(i=1)^k V1_i V2_i
      MatrixOperation.DotProduct(Vector)  and The Vectot that we need to multiply it : and it return The Summation of the multiplication .
      MatrixOperation.Vector = [1,2,3,4]
      Array =[1,2,3,4] 
      MatrixOperation.DotProduct(Array).
      Will generate :
      30
      ~~~~
    3. VectorDevation : 
      - This Function take tow Vectors Should be Conform and make Devation of those two Vectors .
      ~~~~
      MatrixOperation.Vector = [1,2,3,4]
      Array =[1,2,3,4] 
      MatrixOperation.VectorDevation(Array).
      Will generate :
      [1,1,1,1]
      ~~~~
    4. Vector Addation :
      - This Function take tow Vectors Should be Conform and make Addation of those two Vectors .
      ~~~~
      MatrixOperation.Vector = [1,2,3,4]
      Array =[1,2,3,4] 
      MatrixOperation.VectorAddition(Array).
      Will generate :
      [2,4,6,8]
      ~~~~
 3. Data Prepare File (Class ) : 
  - It is Consists of all Data Sampling and Ratio and mesurments of Data and Difference that allow you to get in Our Core for bulding this Tool . (We need to talk about glyph which you will know it very much in ChartsLab-Geometry class .
    1. Sample Matrix :
      - It is a function that allowed you to take observation or sample from Data .
      ~~~~
      SampleMatrix = function ( FromRow , ToRow ) : and return all Obesravation that you select it .
      Matrix = [['mahmoud','Hisham'],[1,2],[3,5]]
      DataPrepare.Matrix(Matrix)
      DataPrepare.SampleMatrix(1 , 2)
      it will generat :
      [[1,2],[3,5]]
      ~~~~
    
    2. Sample Vector : 
      - It is a function that allowed you to take observation or sample from Vector 
        ~~~~
        SampleVector = function ( FromRow , ToRow ) : and return all Obesravation that you select it .
        Vector = [1,2,3,4,5]
        DataPrepare.Matrix(Matrix)
        DataPrepare.SampleMatrix(1 , 4)
        it will generat :
        [2,3,4,5]
        ~~~~
    3. Log :
      - It is Function that get the logarithm of every element in the Input Vector we use it to Dumbain the values to use it in         Scale Class See Chartslab-Scale .
          * DataPrepare.log() .
    4. Sort : 
      - It is Function that sort the Vectro in Ascending way  .
    
        * DataPrepare.Sort()
    
    5. Division :
      - It is Function that allowed you to Divaied every element in the Vector in the division Parameter .
        *   Divation(Vector , division Parameter ) : return Vector After division  .
        
    6. Margine :
      - It is Function that get the percentage of every row in the Matrix this Function that make the Glyph Histogram .
 
          * Margine = function( Matrix ) : it return the The Percentage Matrix .   
      
      
      
