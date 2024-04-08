export default async function Dashboard() {
  const quoteRes = await fetch("https://api.quotable.io/random");
  const resBody = await quoteRes.json()

  return (
    <div>
      <h1>I am on the dashboard!</h1>
      <h2>{resBody.content}</h2>
      <div>{resBody.author}</div>
    </div>
  )
}