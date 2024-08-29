import useGetCat from './useGetCat';

export default function Cat() {
  const { data: catData, isCatLoading, refetchData } = useGetCat();

  if (isCatLoading) {
    return <h2>Loading cat…</h2>;
  }

  return (
    <div>
      <button type="button" onClick={refetchData}>Fetch cat fact</button>
      <h1>{catData?.fact}</h1>
    </div>
  );
}
