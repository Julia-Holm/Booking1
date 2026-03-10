# Julia Holm Booking System Final

Käyttövalmis Next.js + Supabase ajanvarausjärjestelmä.

## Mukana
- visuaalinen ja mobiiliystävällinen asiakaskalenteri
- vapaat ajat automaattisesti
- arkisin 16:00–23:00
- palvelut 15 min / 30 min / 60 min
- hinnat 100 € / 150 € / 250 €
- varausmaksu 50 €
- ajan 15 minuutin lukitus maksun suorittamiselle
- varaus luodaan tilaan pending_payment
- admin vahvistaa maksun vastaanotetuksi
- tuplabookkauksen esto tietokantatasolla
- aikaisintaan tunnin päähän tehtävät varaukset
- admin login
- päiväkohtainen admin-näkymä
- adminin kalenterilista
- varauksen muokkaus
- varauksen peruminen
- aikojen blokkaus UI:sta
- kalenterin väliaikainen sulkeminen
- valmiiksi täytetyt maksutiedot ja saapumisohjeet

## Käyttöönotto
1. Luo Supabase-projekti
2. Aja `supabase/schema.sql`
3. Kopioi `.env.example` tiedostoksi `.env.local`
4. Täytä Supabase-avaimet ja admin-salasana
5. Vie projekti GitHubiin
6. Deployaa Verceliin

## Maksutiedot
- MobilePay: 0404120866
- Tilinumero: FI45 5106 0120 1382 29 / Kiilholma

## Saapumisohjeet
Kalskeentie 6-8 B 26, Pori. Koululla on parkkipaikkoja, muista parkkikiekko.
