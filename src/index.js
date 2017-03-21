import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const ordliste = [
    {
        word: 'å hapse',
        definition: '(omniverb): Å utføre oppgaver som gagner bedriften, brukes som oftest i imperativ.'
    },
    {
        word: 'fryktfat',
        definition: '(subst.): Samlingen med bekymringer i forkant og underveis i et prosjekt.'
    },
    {
        word: 'å spurve',
        definition: '(verb, overført betyd.); forsiktig slippe en drittoppgave i hodet på noen andre, som ikke merker det før det er for sent.'
    },
    {
        word: 'ordlighet',
        definition: 'At det føles som et begrep som betyr noe selv om du ikke nødvendigvis vet hva det betyr.'
    },
    {
        word: 'clever-dickness',
        definition: 'Nnår noen prøver så hardt å være morsom eller flink at andre responderer med å rante.'
    },
    {
        word: 'hverdagsgenialitet',
        definition: 'Verdi, målsetning og fokus til Netlife Research Bergen.'
    },
    {
        word: 'Tazzen',
        definition: '3d-printeren til Netlife Research Bergen. Høyt elsket, hyppig brukt.'
    },
    {
        word: 'Birdie',
        definition: 'Kjell-Mortens ondsinnede bot. Konseptet Birdie oppsto en dag der TV-serien «Bør de gifte seg?» ble diskutert i lunsjen. Bør de ble til Birdie, og Kjell-Morten kodet opp boten med avansert AI som sikrer at du alltid får svar om at «Nei, det bør de ikke» hvis du håpet på et ja og vise-versa..'
    },
    {
        word: 'purreløk',
        definition: 'Når vi sender en purreløk til noen, sender vi en purring. Men purreløk er artigere.'
    },
    {
        word: 'knutset',
        definition: 'Å bli fortalt at det du deler allerede er delt av Knut for lenge siden. Brukt i en setning: «Jeg droppet å dele det, i frykt for å bli knutset.»'
    },
    {
        word: 'rennesteinsfrukt',
        definition: 'Frukt som er så lavthengende at den ligger i rennesteinen.'
    },
    {
        word: 'bergensning',
        definition: 'Når Oslo-kontoret foreslår noe som er gjort for lengst i vest.'
    },
    {
        word: 'dongelrygg',
        definition: 'Det du får etter å ha bært rundt på for mange dongler.'
    },
    {
        word: 'ert i madrassen',
        definition: 'en liten greie i et prosjekt som stadig plager interaksjonsdesigeneren'
    }
]
const random = Math.floor(Math.random() * ordliste.length)
ReactDOM.render((
  <div className='wrapper'>
   <div className='container'>
            <h1>{ordliste[random].word}</h1>
            <p>{ordliste[random].definition}</p>
        <div className="cta"><small>Om du liker dette stammespråket <a href="https://www.netliferesearch.com/jobb">kan du kanskje jobbe hos oss</a>?</small></div>
        </div>
    </div>
), document.getElementById('root'))


