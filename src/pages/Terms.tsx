import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'

const Terms = () => {
  useEffect(() => {
    // Redirect to PDF
    window.location.replace('https://383534e7-7332-4e0f-8956-daa42e69494b.filesusr.com/ugd/100ec9_5feae83082ab445eb5a9ab69002b5264.pdf')
  }, [])

  return (
    <>
      <Helmet>
        <title>Όροι Συμμετοχής | InnovateEast</title>
        <meta
          name="description"
          content="Όροι και προϋποθέσεις συμμετοχής στον Διαγωνισμό"
        />
      </Helmet>
    </>
  )
}

export default Terms
