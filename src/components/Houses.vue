<template>
  <section class="houses" id="casas">
    <h2>As Nossas Casas</h2>
    <div class="houses-grid">
      <div class="houses-box">
        <router-link
          :to="{
            name: 'CasasDetail-Carcavelos',
          }"
        >
          <img :src="casas[0].imagem[0]" alt="" />
          <div class="houses-info">
            <h3>{{ casas[0].nome }}</h3>
            <div class="location">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAe9JREFUSEuNVlGihCAIHE726mTVyWpP5hNBQLR9b79aQxmYYYzAPwJQhgdZpDKsW1jbpL+41+L9TH495ph3LpMtw+KiJpMES2gRZns+CTgK8Gj8BdCjJSYQuYLUIvlrixuA23EMaGgNzmOsRRNe54AP5ySLvuPiyuZXwh936T8tkgSR85EABRnr9mfeFhqSyJC/lmBWWuNjl/VUh5O8PDRGn7XeY2DF3+4gPMsEuphkmvrgue960GYVaH8LsNf2PW/8OQd/KrVlUpk2EFdNJuR+kTi/SiqaojcCntDi/hiJZYVJFYupNpJtnoUcRndo6VFpKrwSE2hSuqouz8xHlimjOSrqrQ0aFSZwD9BSBW0+NN4qMF60RcPc9gMegC6gKIEWU9QTKSHdqm1sQBmrNg5kf2/LNJ1dJdWLJIFxN3HWz2jzkVVU1H/oizD4gB+IPD2Vq4BFcTdDBHZX0TixPJncotHyZERO3ezaH9GoMbZgGipQx+ySc4STx7mRTQ7hlm5tjnMg2QURI7zcBlI1c3+amoLrRoeYOn4nmX7aIHli7t4Wbkc/WHxJqlfXSV5kWrZB+0J4vMW4Ygbid4NuTFYx3Xx9AyuHf3LxEB6poJ3C/U6G57DeKkhdfiP27ctjSPBq0eOXy5zS7m2TwOKz5RdQmvMi7CPPiQAAAABJRU5ErkJggg=="
              />
              <h4>{{ casas[0].subnome }}</h4>
            </div>

            <div class="houses-specs">
              <ul>
                <li v-for="spec in casas[0].specs.slice(0, 4)" :key="spec">
                  <img :src="spec.svg" />
                  <p>{{ spec.nome }}</p>
                </li>
              </ul>
            </div>
          </div>
        </router-link>
      </div>
      <div class="houses-box">
        <router-link
          :to="{
            name: 'CasasDetail-SeteRios',
            params: { id: casas[0].id + casas[0].nome },
          }"
        >
          <img :src="casas[1].imagem[0]" alt="" />
          <div class="houses-info">
            <h3>{{ casas[1].nome }}</h3>
            <div class="location">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAe9JREFUSEuNVlGihCAIHE726mTVyWpP5hNBQLR9b79aQxmYYYzAPwJQhgdZpDKsW1jbpL+41+L9TH495ph3LpMtw+KiJpMES2gRZns+CTgK8Gj8BdCjJSYQuYLUIvlrixuA23EMaGgNzmOsRRNe54AP5ySLvuPiyuZXwh936T8tkgSR85EABRnr9mfeFhqSyJC/lmBWWuNjl/VUh5O8PDRGn7XeY2DF3+4gPMsEuphkmvrgue960GYVaH8LsNf2PW/8OQd/KrVlUpk2EFdNJuR+kTi/SiqaojcCntDi/hiJZYVJFYupNpJtnoUcRndo6VFpKrwSE2hSuqouz8xHlimjOSrqrQ0aFSZwD9BSBW0+NN4qMF60RcPc9gMegC6gKIEWU9QTKSHdqm1sQBmrNg5kf2/LNJ1dJdWLJIFxN3HWz2jzkVVU1H/oizD4gB+IPD2Vq4BFcTdDBHZX0TixPJncotHyZERO3ezaH9GoMbZgGipQx+ySc4STx7mRTQ7hlm5tjnMg2QURI7zcBlI1c3+amoLrRoeYOn4nmX7aIHli7t4Wbkc/WHxJqlfXSV5kWrZB+0J4vMW4Ygbid4NuTFYx3Xx9AyuHf3LxEB6poJ3C/U6G57DeKkhdfiP27ctjSPBq0eOXy5zS7m2TwOKz5RdQmvMi7CPPiQAAAABJRU5ErkJggg=="
              />
              <h4>{{ casas[1].subnome }}</h4>
            </div>

            <div class="houses-specs">
              <ul>
                <li v-for="spec in casas[1].specs.slice(0, 4)" :key="spec">
                  <img :src="spec.svg" />
                  <p>{{ spec.nome }}</p>
                </li>
              </ul>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      casas: [
        {
          id: 1,
          nome: "In&Out Carcavelos",
          subnome: "Carcavelos, Portugal",
          descrição: [
            "Apartamento totalmente remodelado e equipado, com espaço exterior com churrasqueira e espaço para animais de estimação.",
            "",
            "  Localizado numa zona muito calma e sossegada, com todas as comodidades nas proximidades (transportes, hipermercado, creche, mercado acesso a Oeiras, Lisboa, Cascais) ideal para quem tem crianças ou animais de estimação.",
          ],
          imagem: [
            "src/assets/carcavelos1.webp",
            "src/assets/carcavelos2.webp",
            "src/assets/carcavelos3.webp",
            "src/assets/carcavelos4.webp",
            "src/assets/carcavelos5.webp",
            "src/assets/carcavelos6.webp",
            "src/assets/carcavelos7.webp",
            "src/assets/carcavelos8.webp",
            "src/assets/carcavelos9.webp",
            "src/assets/carcavelos10.webp",
            "src/assets/carcavelos11.webp",
            "src/assets/carcavelos12.webp",
          ],
          specs: [
            {
              nome: "2 casas de banho",
              svg: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAapJREFUSEuNVgEShCAIXH9WL7t6Wf3MC0FExOymmasOZYHd9RLkkwDk+hB9awDfzOL9e3pGi54tdsvso0tssdFPia9M17ICjVmW20BzBfPP8fTjB+CWKs9y72DOEksFHO2aswG42j4d5BUo3ZASa7BNkIArA5SE0J6SnirZgHQ+/Tws6rG9bTeHRpES+g0Je8q4C7sSNmSqqsR06xy4jmMhiwxjZSMmwjsL3CBlyayfVRLf+m3EZHHEQ+YITpCQLOpQJVYHAZ0swkrJQKUvQtPOdDHns8lB4FhoPJY8N4AXpcxFV8DbIbu2jIN9cQWLoJufWgX3nSmoNX1kjiliEw3p/KzQqrjIDg7jgAs3MT+rVopAd2mR5qdNf0J2nc1ydzuDhAu5OMD+CPOuPbEQLqRMir2LJTBH6X5yWqgTH48fV3CK3g+5mtT12MMWHT5hmv6lbN6OgJlS2U0/0kZIUUzQC/PNCsTjigtFll5fiu6JfGPdLkF3ug0JxoEX7LKrSyDVOzeVQ5SNswp7xahWYGC6VgdcoA3qKdh1IBRjsHZM4M7b5T+BMKAh+wMaEcEhT+d3AAAAAABJRU5ErkJggg==",
            },
            {
              nome: "Wi-Fi",
              svg: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAgRJREFUSEuNVouVAiEMnBTi9WAF0ssVslCIRViBawUWcYVwBEIIP+94bxUXSDKTSZDAgwDEPNuM3YbyXj8pgqK8KZO8tvFBkN3qdOlmeGl/8vz/DoaTEqAJbu1JHexwLDmbwSnPCwQfMTpEHMaJk/kpp14AeH72KWw2BwRqyqfsWcNGCFtFhES4H8Uy5iAbVhOEUw6EGrmQzsh4MKJb+dZTIc19FYh14JPIDlk4AQpAPDU3c1btkheKBHU+y8Gy2+zZEfCUTRxtXpQIK1WVfyvrisyLHU/AYe0UBEUVHAVHzA8bO0CoVPRiUhVZWvIWDozpcgbBJMQuwaKQHKmqpditKFvOgJCWKl2K1HggB4pPSSAj4QODBG3FaJNgo5VKZWXdKghO8nkKdS5R50C4IWbqeLD2X6kLedPEGJHURKvEmuRlwYqu+3oYdxKC5G9pY24VTY4c7dPon/NQZFtQMrLsPEUZknJqTjpHf/WiDDs/BfVVJPgW9itFatwUaW3X5eSyjvqu8G3aByf/Xm+CmRtNvrTrD41elq4gPBBxkYL6AfBlK87UUxGhHJzvg2UrxhXAI0V9EYqagyH8MdZlDhrAjoRGESEkNPe19NpbtrOUqXVgy8oaHJNZ+43y093JtrfYi3v3T8BaV3VYcrYXzvYyMfmc8X2iakjywL6NbpDyTNc6uF+MbOUdOlfhNQAAAABJRU5ErkJggg==",
            },
            {
              nome: "Permitido animais",
              svg: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAbxJREFUSEuVVmuawjAIHE629WS2J7OeLFsCAUKw7vaHX9WGeTAkJYAAakCDXIT6Xv/+wwNShFovy+UWDKv1rxthFj8H37mMCUrKhMergQ5QO01xqcxLJgUubXBJ61V0exBwDlcjw+8KbhgR0Oaivdx5iTsAOofv0SimHLoa+5y4yNdEOipmEOy2SoMjFom/uyLvq2QLgihwTlyUr2ci2sG8ybLgBWDj5TdJFQXe/w5wWfcs+tHJmwLAAAy9SOlqUXJNyZ0gPHwOBGlrAuKmzYsfYgU2t6iMMk/DcVkSLPKiG9AUJA2OZP+tIJM4s9S9pWHjOgeWxJUdAFbBcl9xa7GdhnBcv+eQLHuRhrEE4PLHxW7XQj8qhZWFwq4+NnnkrxrQ3G8eLi7KzZy2jWxXAugYyzgVacqjYsORI249EE/7318ULFOic5N2BP26KvDTYMxUwC4T7ADFuXLfAwLFNWFEoo1TjcKiRVoLseOOyBW7R20CSNviMiP5FKzZzQdRARB5eMRTk/tDyrnz8o1v1v5RQVbzFeDD1tQCXhUUc7WaA3/JSO1JzUhvC9PhcwMQKeurx+fBqLM/qnNYfgEIg9wjgvhgXAAAAABJRU5ErkJggg==",
            },
            {
              nome: "2 camas",
              svg: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAZpJREFUSEuVVlGiwyAIg5ttJ1t7svVmTgpiQO3z9audCiSEOKZ/P0xEZfuU7CZiIi5yzF88wBjuIcFkSSJuV/TnzrRBPh2Bor53GH7mJyowlr4rBx7TOHAEcKDYuyZvD7KXolvom2HlWZ+OIDLeEPjuWUt7rBY3BFkluH9vCNbtee6zAPKzkQZdKAaZQ/81aLGT4Zzla0CVdg+SiZ422QlRBUjqgTdscoeYEKiKfDmNxeZMDOiQ6y8RvZJ4vFhMjAhS4ouI301OmK0FvyoJJxFfXdo47av09KrEfahIgXzWs0frWOvJt2j174pCkrjUoHsT6sFmqMh5KdT7hAg0zryBazsZh66Yp91CQKvAQoO2tj9cylpq9iLNxyVIcDpTo+lik8KsjBQ9lDuVqcu/T2/qgQ/RUe3wA1MO8l15w2oy+KwyPVqsXLMNGnOQKRY4pwivLHQ+3Q2DfjuO6QksfnDNpOPRKuZ2zaUnSNiSIuGOUhc2SnbddPNG61mjmzoNYWKn5Dr7I4Jn+8tzkAKNVjr+83AF2k0ZPVxWf7YZyiG2gwZtAAAAAElFTkSuQmCC",
            },
            {
              nome: "2 quartos",
              svg: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAZpJREFUSEuVVlGiwyAIg5ttJ1t7svVmTgpiQO3z9audCiSEOKZ/P0xEZfuU7CZiIi5yzF88wBjuIcFkSSJuV/TnzrRBPh2Bor53GH7mJyowlr4rBx7TOHAEcKDYuyZvD7KXolvom2HlWZ+OIDLeEPjuWUt7rBY3BFkluH9vCNbtee6zAPKzkQZdKAaZQ/81aLGT4Zzla0CVdg+SiZ422QlRBUjqgTdscoeYEKiKfDmNxeZMDOiQ6y8RvZJ4vFhMjAhS4ouI301OmK0FvyoJJxFfXdo47av09KrEfahIgXzWs0frWOvJt2j174pCkrjUoHsT6sFmqMh5KdT7hAg0zryBazsZh66Yp91CQKvAQoO2tj9cylpq9iLNxyVIcDpTo+lik8KsjBQ9lDuVqcu/T2/qgQ/RUe3wA1MO8l15w2oy+KwyPVqsXLMNGnOQKRY4pwivLHQ+3Q2DfjuO6QksfnDNpOPRKuZ2zaUnSNiSIuGOUhc2SnbddPNG61mjmzoNYWKn5Dr7I4Jn+8tzkAKNVjr+83AF2k0ZPVxWf7YZyiG2gwZtAAAAAElFTkSuQmCC",
            },

            {
              nome: "cozinha",
              svg: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAdRJREFUSEuVVgmSxCAIhJetedmYl8V9mSuCiHhk1pqaSmKEpummgvCPhQCQ5f3dtQ1H7yD/spy0x3iXI+6eH9BJWJfA5T8nDgCQTrl7BZDXYG1xI9hYavuU0u7ymK51eeroftp+4bcFJ+ruwuGQgIP1CJrAsex4593yH0u3CDktRs9bsQSNvZc9DSdQKmZONDQj1eCcrL7/QAbqxwUIidvGcejaUbQTDEaA3JEjRFHXA5ADAqRMCRZLK1CBz+0akBtanqKiIKgv8UcUqrUvcwWj/AkpI0e4meu6ODhgAsyXqNkCoWpSY3/jzxrIHiI+r8Lsh2jhAHiJE+cqBclbDxrSpqLWwARZOZfglRzxRZfGG0UBMzzjtKiHL24sN194v0uJUc0vVL9VINqvtIjk1THEMTWZ5HhLssHS38qUKiDOd+sWA477goOHndOoGaLNRIT2l402mNHQ0s3VRnobGu6MAnmKxqkH1kRNpj88KjAdwNWt3bB7MmAAzF0tc6E6Y2xjPY/OycNsIVoG+58H4rpFbtg1hw4mmgeUi7Uc777JRdchA9LwEuTf410mGJzcZRMowTm0GeCb6Wk/DJYyted26JZpHDK6nRMYEwwfKUupHMiRrT/ibOUkIEpkZgAAAABJRU5ErkJggg==",
            },
            {
              nome: "garagem",
              svg: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAeVJREFUSEuNlb11wzAMhD/0ziDZwhoj2SCF3SS95QHSxF0WyBjWUOkZ/gsEqVh6z7KeKPAOhwMoDC4BHOmeLv1GQNy6VFf7hxAVfvFeY/S+I/QxZKViQ8LWLdMhO5PTFon6fv3AAGj8/3fZk2iWaPjpETgiXHTufW0qocULffUx4b+pWc3AwLhWOh22VZi4g1i6fZHhHtkjC7ipF613FzFGjoi7+oxnE9NJlAEIm+eUjQWNETKhe/ZuIp1DagZZ66B9AAgbN+wH9qu9kimW1ply9tGfFS1vUNgnAGO7gQt1qeZsilDs8BwT0unMvj8vK9Pe+70ym1aeELc0AFmaIJHF6G3TTwvzTXJUGRJxTojD5ckTrHZw8LuJNCZ+IMXUAWYbrSw8RQ2Rd3A34NzSa6R7Bt6AE8gnuI8BQLWgRi7ZrFlujrOyUGXRI7gpcpUI+AI5gfsBXlX323oEWb6BF5AbuLOQpRbvqeSiKmiDXDbtndPXU39TASCODd0HBWDtw62DRTd2xWsqvyBM1qapix9acI+P1zFjO1mflGrNDLhka3OgNi4IFSidnCjnACWTiHo/mt5GqEZPA7Bymb0JLh7y6pGasbujvWNsOngkPJdht+fE78+yvpnH7W1rsEOKhzZN3LPsfy5iziNBR1SeAAAAAElFTkSuQmCC",
            },
          ],
          vermais:
            "https://www.airbnb.pt/rooms/44418266/amenities?guests=1&adults=1&s=67&unique_share_id=d1c09763-854e-4281-acc1-0100e4892cd9&source_impression_id=p3_1713108789_U%2B89swwrHJfIm2mo",
          titleLink:
            "https://www.airbnb.pt/rooms/44418266?guests=1&adults=1&s=67&unique_share_id=d1c09763-854e-4281-acc1-0100e4892cd9&source_impression_id=p3_1713108789_U%2B89swwrHJfIm2mo",
        },
        {
          id: 2,
          nome: "In&Out Sete Rios",
          subnome: "Lisboa, Portugal",
          descrição: [
            "-Metro a um minuto a pé.",
            "-Rede Expressos a 1 min a pé, com acessos a todo o País.",
            "-Jardim zoológico, restaurantes e Hospital IPO e Sta Maria.",
            "",
            "O apartamento encontra-se totalmente remodelado, pintado recentemente e completamente equipado.",
            "",
            "Muito central, numa zona nobre da cidade, com todos os transportes a menos de 1 minuto a pé.",
            "Terá uma casa de banho disponível só para si, encostada ao quarto.",
            "",
            "Wi-Fi ilimitado e gratuito (fibra ótica)",
            "Cozinha bem equipada.",
            "Acesso dos hóspedes",
            "A toda a casa, a qual se encontra totalmente equipada",
          ],
          imagem: [
            "src/assets/SeteRios1.webp",
            "src/assets/SeteRios2.webp",
            "src/assets/SeteRios3.webp",
            "src/assets/SeteRios4.webp",
            "src/assets/SeteRios5.webp",
            "src/assets/SeteRios6.webp",
            "src/assets/SeteRios7.webp",
            "src/assets/SeteRios8.webp",
            "src/assets/SeteRios9.webp",
            "src/assets/SeteRios11.webp",
            "src/assets/SeteRios12.webp",
            "src/assets/SeteRios13.webp",
            "src/assets/SeteRios14.webp",
            "src/assets/SeteRios15.webp",
            "src/assets/SeteRios16.webp",
            "src/assets/SeteRios17.webp",
            "src/assets/SeteRios18.webp",
          ],
          specs: [
            {
              nome: " 2 casas de banho",
              svg: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAapJREFUSEuNVgEShCAIXH9WL7t6Wf3MC0FExOymmasOZYHd9RLkkwDk+hB9awDfzOL9e3pGi54tdsvso0tssdFPia9M17ICjVmW20BzBfPP8fTjB+CWKs9y72DOEksFHO2aswG42j4d5BUo3ZASa7BNkIArA5SE0J6SnirZgHQ+/Tws6rG9bTeHRpES+g0Je8q4C7sSNmSqqsR06xy4jmMhiwxjZSMmwjsL3CBlyayfVRLf+m3EZHHEQ+YITpCQLOpQJVYHAZ0swkrJQKUvQtPOdDHns8lB4FhoPJY8N4AXpcxFV8DbIbu2jIN9cQWLoJufWgX3nSmoNX1kjiliEw3p/KzQqrjIDg7jgAs3MT+rVopAd2mR5qdNf0J2nc1ydzuDhAu5OMD+CPOuPbEQLqRMir2LJTBH6X5yWqgTH48fV3CK3g+5mtT12MMWHT5hmv6lbN6OgJlS2U0/0kZIUUzQC/PNCsTjigtFll5fiu6JfGPdLkF3ug0JxoEX7LKrSyDVOzeVQ5SNswp7xahWYGC6VgdcoA3qKdh1IBRjsHZM4M7b5T+BMKAh+wMaEcEhT+d3AAAAAABJRU5ErkJggg==",
            },
            {
              nome: "Wi-Fi",
              svg: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAgRJREFUSEuNVouVAiEMnBTi9WAF0ssVslCIRViBawUWcYVwBEIIP+94bxUXSDKTSZDAgwDEPNuM3YbyXj8pgqK8KZO8tvFBkN3qdOlmeGl/8vz/DoaTEqAJbu1JHexwLDmbwSnPCwQfMTpEHMaJk/kpp14AeH72KWw2BwRqyqfsWcNGCFtFhES4H8Uy5iAbVhOEUw6EGrmQzsh4MKJb+dZTIc19FYh14JPIDlk4AQpAPDU3c1btkheKBHU+y8Gy2+zZEfCUTRxtXpQIK1WVfyvrisyLHU/AYe0UBEUVHAVHzA8bO0CoVPRiUhVZWvIWDozpcgbBJMQuwaKQHKmqpditKFvOgJCWKl2K1HggB4pPSSAj4QODBG3FaJNgo5VKZWXdKghO8nkKdS5R50C4IWbqeLD2X6kLedPEGJHURKvEmuRlwYqu+3oYdxKC5G9pY24VTY4c7dPon/NQZFtQMrLsPEUZknJqTjpHf/WiDDs/BfVVJPgW9itFatwUaW3X5eSyjvqu8G3aByf/Xm+CmRtNvrTrD41elq4gPBBxkYL6AfBlK87UUxGhHJzvg2UrxhXAI0V9EYqagyH8MdZlDhrAjoRGESEkNPe19NpbtrOUqXVgy8oaHJNZ+43y093JtrfYi3v3T8BaV3VYcrYXzvYyMfmc8X2iakjywL6NbpDyTNc6uF+MbOU",
            },
            {
              nome: "8 camas",
              svg: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAZpJREFUSEuVVlGiwyAIg5ttJ1t7svVmTgpiQO3z9audCiSEOKZ/P0xEZfuU7CZiIi5yzF88wBjuIcFkSSJuV/TnzrRBPh2Bor53GH7mJyowlr4rBx7TOHAEcKDYuyZvD7KXolvom2HlWZ+OIDLeEPjuWUt7rBY3BFkluH9vCNbtee6zAPKzkQZdKAaZQ/81aLGT4Zzla0CVdg+SiZ422QlRBUjqgTdscoeYEKiKfDmNxeZMDOiQ6y8RvZJ4vFhMjAhS4ouI301OmK0FvyoJJxFfXdo47av09KrEfahIgXzWs0frWOvJt2j174pCkrjUoHsT6sFmqMh5KdT7hAg0zryBazsZh66Yp91CQKvAQoO2tj9cylpq9iLNxyVIcDpTo+lik8KsjBQ9lDuVqcu/T2/qgQ/RUe3wA1MO8l15w2oy+KwyPVqsXLMNGnOQKRY4pwivLHQ+3Q2DfjuO6QksfnDNpOPRKuZ2zaUnSNiSIuGOUhc2SnbddPNG61mjmzoNYWKn5Dr7I4Jn+8tzkAKNVjr+83AF2k0ZPVxWf7YZyiG2gwZtAAAAAElFTkSuQmCC",
            },
            {
              nome: "3 quartos",
              svg: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAZpJREFUSEuVVlGiwyAIg5ttJ1t7svVmTgpiQO3z9audCiSEOKZ/P0xEZfuU7CZiIi5yzF88wBjuIcFkSSJuV/TnzrRBPh2Bor53GH7mJyowlr4rBx7TOHAEcKDYuyZvD7KXolvom2HlWZ+OIDLeEPjuWUt7rBY3BFkluH9vCNbtee6zAPKzkQZdKAaZQ/81aLGT4Zzla0CVdg+SiZ422QlRBUjqgTdscoeYEKiKfDmNxeZMDOiQ6y8RvZJ4vFhMjAhS4ouI301OmK0FvyoJJxFfXdo47av09KrEfahIgXzWs0frWOvJt2j174pCkrjUoHsT6sFmqMh5KdT7hAg0zryBazsZh66Yp91CQKvAQoO2tj9cylpq9iLNxyVIcDpTo+lik8KsjBQ9lDuVqcu/T2/qgQ/RUe3wA1MO8l15w2oy+KwyPVqsXLMNGnOQKRY4pwivLHQ+3Q2DfjuO6QksfnDNpOPRKuZ2zaUnSNiSIuGOUhc2SnbddPNG61mjmzoNYWKn5Dr7I4Jn+8tzkAKNVjr+83AF2k0ZPVxWf7YZyiG2gwZtAAAAAElFTkSuQmCC",
            },
            {
              nome: "cozinha",
              svg: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAdRJREFUSEuVVgmSxCAIhJetedmYl8V9mSuCiHhk1pqaSmKEpummgvCPhQCQ5f3dtQ1H7yD/spy0x3iXI+6eH9BJWJfA5T8nDgCQTrl7BZDXYG1xI9hYavuU0u7ymK51eeroftp+4bcFJ+ruwuGQgIP1CJrAsex4593yH0u3CDktRs9bsQSNvZc9DSdQKmZONDQj1eCcrL7/QAbqxwUIidvGcejaUbQTDEaA3JEjRFHXA5ADAqRMCRZLK1CBz+0akBtanqKiIKgv8UcUqrUvcwWj/AkpI0e4meu6ODhgAsyXqNkCoWpSY3/jzxrIHiI+r8Lsh2jhAHiJE+cqBclbDxrSpqLWwARZOZfglRzxRZfGG0UBMzzjtKiHL24sN194v0uJUc0vVL9VINqvtIjk1THEMTWZ5HhLssHS38qUKiDOd+sWA477goOHndOoGaLNRIT2l402mNHQ0s3VRnobGu6MAnmKxqkH1kRNpj88KjAdwNWt3bB7MmAAzF0tc6E6Y2xjPY/OycNsIVoG+58H4rpFbtg1hw4mmgeUi7Uc777JRdchA9LwEuTf410mGJzcZRMowTm0GeCb6Wk/DJYyted26JZpHDK6nRMYEwwfKUupHMiRrT/ibOUkIEpkZgAAAABJRU5ErkJggg==",
            },
            {
              nome: "TV com cabo normal",
              svg: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAZtJREFUSEuNVgGShDAICz/Tl+3ty/RnrEhLKUU8Z3bGqUICCbiEdhEAlnsCiMe9HobL3tEoi11fu5/dSS2RDzakJLIDh1hPSB5JupmyT6rBf1d6+Y1rhGwAzqRGI11UcIdJgqMl2UMr5Fyef5XA2qhWQYqvhxpzALQBLEz3VvFBjI2FPWFfdRolvlXQ0Tvb3o6NgJMFsFKYlWMnuzHoczGVslPnpI5aPSLAXxBOkdMAWq9d8rynD65Vsw5/nyDeI4A3XiGMl8ffG0DjzRRFVgAC1fYvhksfGUD3SWebVvCk4VOJBHBLdLffazAhO5sGGdcWhZOJaADQtH4vxdHvm6fYENbq3qw+UFoBMT0tuBVs9ahpQHxraYNGLL3zAEHMgnLwUqJBov4i4usaN0IKQLg7kWpgjFK/rja1E33fRB7rWs+CTYNBQ4uKWbEKJg3igLzZtNhXcdCMmm5M32uf5XXiphfaap81kEX3ubbgtn4+X1eT96skl4/QOe2iYsP8J/vTeLdv8qRvuZDXfx5FG0cFoe9puwtTGUayY34BLsgkUdNfHgAAAABJRU5ErkJggg==",
            },
          ],
          vermais:
            "https://www.airbnb.pt/rooms/15789410/amenities?guests=1&adults=1&s=67&unique_share_id=a19c0604-bd2d-489b-bfcc-b1436b4559c2&source_impression_id=p3_1713108777_9TuNQli9L8fW0T58",
          titleLink:
            "https://www.airbnb.pt/rooms/15789410?guests=1&adults=1&s=67&unique_share_id=a19c0604-bd2d-489b-bfcc-b1436b4559c2&source_impression_id=p3_1713108777_9TuNQli9L8fW0T58",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.houses {
  max-width: 100rem;
  margin-inline: auto;
  margin-block: 8rem;

  h2 {
    font-size: 4rem;
    text-transform: capitalize;
    text-align: center;
    margin-block-end: 6.5rem;
  }

  .houses-grid {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 2rem;

    gap: 5rem;

    .houses-box {
      width: 25rem;
      padding-block-end: 0.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-radius: 18px;
      background-color: #fff;

      box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.099);

      overflow: hidden;

      text-decoration: none;
      transition: all 400ms cubic-bezier(0.215, 0.61, 0.355, 1);

      a {
        text-decoration: none;
        color: #313131;
      }

      &:hover {
        transform: translateY(-1.2rem);
        box-shadow: 0 20px 20px 2px rgba(0, 0, 0, 0.307);
      }

      .houses-info {
        width: 100%;
        padding: 1.6rem;

        h3 {
          font-size: 1.8rem;
        }

        h4 {
          font-size: 0.8rem;
          opacity: 0.6;

          line-height: 2;
          padding-inline-start: 0.6rem;
        }

        .location {
          display: flex;
          align-items: center;

          img {
            width: 2rem;
            scale: 0.8;
            height: auto;
            aspect-ratio: 1/1;
            opacity: 0.6;
          }
        }
      }

      img {
        width: 100%;
      }
      .houses-specs {
        margin-block-start: 2rem;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 2rem;

        ul {
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          justify-content: start;
          align-items: center;
          column-gap: 0.4rem;
          row-gap: 1rem;

          li {
            display: flex;
            flex-grow: 1;
            justify-content: start;
            align-items: center;
            gap: 0.5rem;

            max-height: 2.5rem;

            background-color: rgba(235, 235, 235, 0.551);
            border-radius: 15px;
            padding: 0.8rem;

            font-size: 1rem;
            transition: all 300ms;
            cursor: pointer;

            &:hover {
              background-color: rgba(194, 194, 194, 0.331);
              box-shadow: 0 10px 20px 1px rgba(159, 159, 159, 0.129);
              scale: 0.97;
            }

            &:nth-child(1) {
              width: max-content;
            }

            img {
              width: 1.5rem;
              opacity: 0.5;
            }

            p {
              font-size: 0.9rem;
              text-transform: capitalize;
              font-weight: 500;
            }
          }
        }
      }
    }
  }
}

router-link {
  text-decoration: none;
}

// media queries

@media (max-width: 700px) {
  .houses {
    margin-block: 6rem;
    h2 {
      font-size: 3rem;
      margin-block-end: 3rem;
    }
    .houses-grid {
      flex-direction: column;
      gap: 1rem;
      .houses-box {
        scale: 0.9;
      }
    }
  }
}
@media (max-width: 530px) {
  .houses {
    h2 {
      font-size: 2.4rem;
      margin-block-end: 1rem;
    }
    .houses-grid {
      gap: 0;
      .houses-box {
        scale: 0.78;
      }
    }
  }
}
@media (max-width: 420px) {
  .houses {
    h2 {
      font-size: 2.4rem;
      margin-block-end: 1rem;
    }
    .houses-grid {
      gap: 2rem;
      .houses-box {
        scale: 1;
        width: 80%;
        height: 100%;

        .houses-info {
          h3 {
            font-size: 1.4rem;
          }

          .location {
            margin-inline-start: -0.3rem;
            img {
              scale: 0.5;
            }
          }
          .houses-specs {
            display: none;
          }
        }
      }
    }
  }
}
</style>
