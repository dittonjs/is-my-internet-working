export default function DynamicDashboard({params}) {
  console.log(params);
  return  <h1>{params.id}</h1>
}