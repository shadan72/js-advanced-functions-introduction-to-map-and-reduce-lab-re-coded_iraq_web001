// Your code here

const Alist=[1,2,5,7,8]
const mapToNegativize=function(Alist){
  const Negative= Alist.map(x => x=-x);
  return Negative;
}

const mapToNoChange= function(Alist){
  const NoChange=Alist.map(x => x=x)
  return NoChange;
}