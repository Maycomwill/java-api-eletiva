# Java API

## Conceito

Para o trabalho final da disciplina de JAVA, nos foi solicitado desenvolver uma api rest.

## Para quê?

A aplicação utiliza de seus end-points para realizar consultas a outras apis extenas (Pokeapi.co) e Nasa (api.nasa.gov).

---

## Documentação

**GET (🟡), POST (🔵)**

### Auth

> 🔵 "/users"
>
> Corpo: `{
"name": "John Doe",
"email": "john.doe@example.com"
}`
>
> Resposta: `{
"name": "John Doe",
"email": "john.doe@example.com",
"id": "7b125865-91ae-4919-8d90-3c50e13bf6a5"
}`

> 🔵 "/users/login"
>
> Corpo: `{
"name": "John Doe",
"email": "john.doe@example.com"
}`
>
> Resposta: `{
"name": "John Doe",
"email": "john.doe@example.com",
"id": "7b125865-91ae-4919-8d90-3c50e13bf6a5"
}`

## Pokemon

> 🟡 "/pokemon/{id}"
>
> Parâmetro: id do pokemon
>
> Resposta:
> `
{
 "name": "Charizard",
 "height": 17,
 "weight": 905
 }`

## NASA

> 🟡 "/nasa"
>
> Resposta:
 `{
 "date": "2024-05-28",
 "explanation": "It's back. The famous active region on the Sun that created auroras visible around the Earth earlier this month has survived its rotation around the far side of the Sun -- and returned. Yesterday, as it was beginning to reappear on the Earth-facing side, the region formerly labeled AR 3664 threw another major solar flare, again in the highest-energy X-class range. The featured video shows the emerging active region on the lower left, as it was captured by NASA's Earth-orbiting Solar Dynamics Observatory yesterday in ultraviolet light. The video is a time-lapse of the entire Sun rotating over 24 hours. Watch the lower-left region carefully at about the 2-second mark to see the powerful flare burst out. The energetic particles from that flare and associated CME are not expected to directly impact the Earth and trigger impressive auroras, but scientists will keep a close watch on this unusually active region over the next two weeks, as it faces the Earth, to see what develops.",
"media_type": "video",
"service_version": "v1",
 "title": "Solar X Flare as Famous Active Region Returns", > "url": "https://www.youtube.com/embed/yt7uwWzSTw0?rel=0"
 }`

## Test

> 🟡 "/"
>
> Resposta: `"Api Ligada"`

## Conclusão

- O desenvolvimento do sistema é complexo e necessida de bastante tempo para que seja feito com excelência.
- A linguagem JAVA trás robustez por ser fortemente tipada.
- Em contrapartida apresenta uma curva de aprendizado muito maior, necessitando de muito tempo para o aprendizado e produção de um sistema que atenda todos os requisitos.

---

Créditos:

- [Maycom Willams](https://github.com/maycomwill)
- [Nathália Sousa](https://github.com/Nathaliaraphaella)
- [Hugo Alexandre](https://github.com/HugoAS007)
- [Eduarda Lays](https://github.com/duda-http)
- [Edilson Bernardo](https://github.com/ebernardo98)
- [Evellyn Amélia](https://github.com/evellynamelia)
