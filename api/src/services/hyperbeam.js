import { fetch } from 'cross-undici-fetch'

export const getHyperbeam = async () => {
  const LIVE = 'sk_live_GEklk3VmQA9fH1Hc7WcumHWIud8Ia5iEChX-mtIDA00'

  const response = await fetch(`https://engine.hyperbeam.com/v0/vm`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${LIVE}` },
  })

  const json = await response.json()

  console.log(json)

  return {
    session_id: json.session_id,
    embed_url: json.embed_url,
    admin_token: json.admin_token,
  }
}
