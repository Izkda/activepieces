import {
  Property,
  TriggerStrategy,
  WebhookHandshakeStrategy,
  createTrigger,
} from '@activepieces/pieces-framework';
import { quickzuAuth } from '../../';

const markdown = `
- Go to the **Settings->API and Webhooks** section.
- In the webhook settings, paste this URL: 
  \`{{webhookUrl}}\`
- Click on **Save**.
`;
const sampleData = {
  payload: {
    id: '65cc96cfcf7028f638e20b0c',
    data: {
      id: '65cc96cfcf7028f638e20b0c',
      __v: 0,
      _id: '65cc96cfcf7028f638e20b0c',
      area: '63862620938a5552a9e6b',
      shop: '5fbe833cef26b83b8b7c3',
      status: 'pending',
      currency: 'INR',
      customer: {
        phone: '9039101337',
        address: 'okay mumbai',
        full_name: 'Mohit',
      },
      order_id: 233312,
      products: [
        {
          id: '65cc96cfcf70280fbde20b0d',
          _id: '65cc96cfcf70280fbde20b0d',
          qty: 1,
          addon: [],
          amount: 10,
          product: {
            id: '5fbe8677ef26b83b8f53b7cf',
            __v: 0,
            _id: '5fbe8677ef26b83b8f53b7cf',
            mrp: 10,
            sku: '',
            desc: '',
            meta: { nonveg: false },
            name: 'Shrewsbury Cookies',
            shop: '5fbe833cef26b8f53b7c3',
            unit: 'gram',
            index: 0,
            price: 10,
            addons: [],
            status: true,
            options: [],
            category: '5fbe83acef26bb8f53b7c7',
            variants: [],
            exclude_tax: false,
            availability: true,
            stock_enabled: false,
            value_per_unit: 200,
            available_stock: -1,
            enable_variants: true,
          },
          variant: [],
          createdAt: '2024-02-14T10:32:47.953Z',
          updatedAt: '2024-02-14T10:32:47.953Z',
        },
      ],
      coupon_id: '',
      createdAt: '2024-02-14T10:32:47.953Z',
      sub_total: 29,
      updatedAt: '2024-02-14T10:32:47.953Z',
      order_type: 'delivery',
      coupon_code: '',
      instruction: 'spicy food',
      payment_mode: 'paylater',
      taxes_amount: 2.9,
      total_amount: '31.90',
      currency_data: {
        code: 'INR',
        name: 'Indian Rupee',
        symbol: 'Rs',
        rounding: 0,
        name_plural: 'Indian rupees',
        symbol_native: '₹',
        decimal_digits: 2,
      },
      payment_status: 'unpaid',
      transaction_id: '',
      delivery_charges: 0,
      stripe_session_id: '',
      subtotal_discount: 0,
      item_level_discount: 0,
      razorpay_session_id: '',
    },
    shop: {
      id: '5fbe833c6b83b8f53b7c3',
      __v: 0,
      _id: '5fbe833c6b83b8f53b7c3',
      css: '',
      apps: { analytics: '' },
      desc: 'pastries, sandwiches, cake',
      name: 'Classic Cakes',
      alias: 'ccake',
      header: '',
      timing: {
        '0': { end: '23:59', start: '00:00', status: true },
        '1': { end: '23:59', start: '00:00', status: false },
        '2': { end: '23:59', start: '00:00', status: true },
        '3': { end: '23:59', start: '00:00', status: true },
        '4': { end: '23:59', start: '00:00', status: true },
        '5': { end: '23:59', start: '00:00', status: true },
        '6': { end: '23:59', start: '00:00', status: true },
        createdAt: '2024-01-13T17:54:46.861Z',
        updatedAt: '2024-01-13T17:54:46.861Z',
      },
      address: '78 Washington St, Hoboken',
      country: 'IN',
      dine_in: true,
      domains: [],
      message: {},
      pick_up: true,
      category: 'restaurant',
      currency: 'INR',
      delivery: {
        cost: 0,
        free: 0,
        status: true,
        min_order: 0,
        is_free_delivery: true,
      },
      language: 'en',
      template: 'five',
      createdAt: '2020-11-25T16:15:56.049Z',
      is_closed: false,
      seller_id: {
        id: '5fbe8101ef26b83b8f53b7c1',
        __v: 0,
        _id: '5fbe8101ef26b83b8f53b7c1',
        email: 'focix@getnada.com',
        language: 'en-us',
        createdAt: '2020-11-25T16:06:25.546Z',
        full_name: 'focix',
        updatedAt: '2023-07-01T14:02:27.589Z',
        account_type: 'seller',
        is_email_verified: true,
      },
      updatedAt: '2024-01-29T10:22:46.775Z',
      is_blocked: false,
      receive_on: 'whatsapp',
      appointment: false,
      is_onlymenu: false,
      payment_inst: 'Pay Offline via UPI/CASH etc',
      currency_data: {
        code: 'INR',
        name: 'Indian Rupee',
        symbol: 'Rs',
        rounding: 0,
        name_plural: 'Indian rupees',
        symbol_native: '₹',
        decimal_digits: 2,
      },
      payment_modes: {
        stripe: {
          logo: '/public/assets/imgs/stripe.svg',
          name: 'stripe',
          enabled: true,
          test_mode: true,
          description: '',
          display_name: 'Stripe',
        },
        razorpay: {
          logo: '/public/assets/imgs/razorpay.svg',
          name: 'razorpay',
          key_id: 'as',
          enabled: false,
          test_mode: false,
          secret_key: 'da',
          description: '',
          test_key_id: '',
          display_name: 'Razorpay',
          test_secret_key: '',
        },
      },
      use_area_list: true,
      is_maintenance: false,
      manual_payments: true,
      payment_inst_title: 'Pay Later',
      term_condition_text: 'Bhgghhhbsbsbbsbnzja bhbb',
      condition_option_enabled: true,
      invoice_footer_thankyou_msg: '',
    },
    text: "Hi, I'd like to place an order",
    overiew: {
      TAXES: 'INR 2.90',
      TOTAL: 'INR 31.90',
      DELIVERY: 'INR 0.00',
      SUB_TOTAL: 'INR 29.00',
      ORDER_TYPE: 'Delivery',
      STORE_LINK: 'ccake.quickzu.com',
      STORE_NAME: 'Classic Cakes',
      PICKUP_TIME: '',
      ORDER_NUMBER: 233312,
      TABLE_NUMBER: '',
      CUSTOMER_NAME: 'Mohit',
      CUSTOMER_PHONE: '9039101337',
      PAYMENT_METHOD: 'PAYLATER',
      APPOINTMENT_TIME: '',
      CUSTOMER_ADDRESS: 'okay mumbai',
      ORDER_INSTRUCTION: 'spicy food',
      SUBTOTAL_DISCOUNT: 'INR 0.00',
      ITEM_LEVEL_DISCOUNT: 'INR 0.00',
      PAYMENT_INSTRUCTION: '\nPay Offline via UPI/CASH etc',
    },
    hyperlink: '',
    total_amount: '31.90',
  },
  resource: 'order',
  operation: 'create',
};

export const orderCreatedTrigger = createTrigger({
  auth: quickzuAuth,
  name: 'quickzu_order_created_trigger',
  displayName: 'Order Created/Updated',
  description:
    'Triggers when a new order is created or a order status is changed in store.',
  type: TriggerStrategy.WEBHOOK,
  sampleData: sampleData,
  props: {
    md: Property.MarkDown({
      value: markdown,
    }),
  },
  async onEnable(context) {
    // Empty
  },
  async onDisable(context) {
    // Empty
  },
  async run(context) {
    return [context.payload];
  },
  handshakeConfiguration: {
    strategy: WebhookHandshakeStrategy.BODY_PARAM_PRESENT,
    paramName: 'test',
  },
  async onHandshake(context) {
    return {
      status: 200,
      body: {},
    };
  },
});
