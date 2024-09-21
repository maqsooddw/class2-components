// compnent 1

export default function Heading():any{
  return(
    <div> <h1>Hello From Component 1 <span><b>Heading.tsx</b></span></h1></div>
  )
}

// component 1b

export function Heading1b(prop:any):any{
  console.log(prop)
  return(
    <div> <h1>{`Name ${prop.name} Cast ${prop.cast} Student No ${prop.Stdno}`} <b>Heading.tsx</b> </h1></div>
  )
}
