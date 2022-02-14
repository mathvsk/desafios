function ValueT(b1=false, b2=true, b3= false, t=0){
  if (b1) {
    t = 10
  }
  
  if (b2) {
    if (b3){
      t=7
    }
    else {
      t=3,
      t -= 2
    }
    t += 1
  }
  console.log(t)
}

ValueT()