import type { APIGatewayEvent, Context } from 'aws-lambda'
import { fetch } from 'cross-undici-fetch'

import { logger } from 'src/lib/logger'

/**
 * The handler function is your code that processes http request events.
 * You can use return and throw to send a response or error, respectively.
 *
 * Important: When deployed, a custom serverless function is an open API endpoint and
 * is your responsibility to secure appropriately.
 *
 * @see {@link https://redwoodjs.com/docs/serverless-functions#security-considerations|Serverless Function Considerations}
 * in the RedwoodJS documentation for more information.
 *
 * @typedef { import('aws-lambda').APIGatewayEvent } APIGatewayEvent
 * @typedef { import('aws-lambda').Context } Context
 * @param { APIGatewayEvent } event - an object which contains information from the invoker.
 * @param { Context } context - contains information about the invocation,
 * function, and execution environment.
 */

const KEY = 'sk_test_gKsX080pkDUKC2p-O2TBwNbjJktM9__Wv0v5ed7aPLE'
const LIVE = 'sk_live_GEklk3VmQA9fH1Hc7WcumHWIud8Ia5iEChX-mtIDA00'

export const handler = async (event: APIGatewayEvent, context: Context) => {
  logger.info('Invoked hyperbeam function')

  const response = await fetch(`https://engine.hyperbeam.com/v0/vm`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${LIVE}` },
  })

  const json = await response.json()

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      response,
      data: json,
    }),
  }
}
