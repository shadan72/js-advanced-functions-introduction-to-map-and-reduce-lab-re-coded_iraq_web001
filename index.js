// Your code here

const Alist=[1,2,5,7,8];
const mapToNegativize=function(Alist){
  const Negative= Alist.map(x => x=-x);
  return Negative;
};

const mapToNoChange= function(Alist){
  const NoChange=Alist.map(x => x=x);
  return NoChange;
};

const mapToDouble= function(Alist){
  const double=Alist.map(x => x=x*2)
  return double;
}

const mapToSquare=function(Alist){
  const squar=Alist.map(x => x= x ** 2);
  return squar
}

const reduceToTotal= function(Alist, startingPoint){
  const total=Alist.reduce((x,startingPoint) => x + startingPoint);
  return total;
}

const 





