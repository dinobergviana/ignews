import { query as q } from 'faunadb';
import { fauna } from "../../../services/fauna";
import { stripe } from '../../../services/stripe';

export async function saveSubscription (
  subscriptionId: string,
  customerId: string,
  createAction = false
) {
  // search for user on FaunaDB database with user id (custumerId)
  // save subscripion's data on FaunaDB
  const userRef = await fauna.query(
    q.Select(
      "ref",
      q.Get(
        q.Match(
          q.Index('user_by_stripe_customer_id'),
          customerId
        )
      )
    )
  )

  const subscripion = await stripe.subscriptions.retrieve(subscriptionId)

  const subscripionData = {
    id: subscriptionId,
    userId: userRef,
    status: subscripion.status,
    price_id: subscripion.items.data[0].price.id
  }

  if (createAction) {
    await fauna.query(
      q.Create(
        q.Collection('subscriptions'),
        { data: subscripionData }
      )
    )
  } else {
    await fauna.query(
      q.Replace(
        q.Select(
          "ref",
          q.Get(
            q.Match(
              q.Index('subscription_by_id'),
              subscriptionId
            )
          )
        ),
        { data: subscripionData }
      )
    )
  }

  
}