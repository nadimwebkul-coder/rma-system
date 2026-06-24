# User Guide of Magento 2 Product Return RMA — New Features

Updated June 2026

[Live Demo](https://magento2demo.webkul.in/modules-demo/?demo=Webkul_Rmasystem)

[Magento 2 RMA](https://store.webkul.com/magento2-rma-extension.html) plugin allows managing customer requests related to product returns, refunds, exchanges, and order cancellations.

The following guide outlines the latest advanced features implemented in the Magento 2 RMA system. These features introduce workflow automation, deep analytics dashboards, store credit wallet refunds, fraud risk scoring, quick order cancellation popups, and complete API coverage.

## New Features of Product Return RMA

- **Automated Workflow Rules Engine**: Automate RMA approvals, routing, and alerts using conditional logical rules.
- **Analytics & Reporting Dashboard**: Track performance with daily, weekly, monthly charts for refunds, pending value, declined value, return rates, and top returned products.
- **RMA Wallet Credit System**: Refund return amounts directly into the customer's digital store credit wallet.
- **Fraud Detection & Risk Scoring**: Automatically score customer risk and track frequency of returns to prevent return abuse.
- **Quick Order Cancellation**: Allow customers to initiate returns/cancellations directly from order lists and order details pages with an advanced popup.
- **Complete REST & GraphQL API Support**: Full headless commerce and mobile application integration.

---

## Configuration of Product Return RMA

Under `RMA System > RMA Configuration`, the admin can configure newly introduced automation, wallet refund, and fraud detection features:

### 1. Automated Workflow Configuration

This setting allows the admin to set up automatic logic gates to authorize returns instantly, saving human verification time.


![Automated Workflow Configuration General Settings](/Rmasystem/image/automated_workflow/automated_workflow_1.png)

![Automated Workflow Configuration General Settings](/Rmasystem/image/automated_workflow/automated_workflow_2.png)

- ***General Rules Settings***
  - **Enable Rules Engine**: Master toggle to enable/disable automated processing.

- ***Auto-Approve Rules***
  - **Enable Auto-Approve Rules**: Turn on automated approvals.
  - **Max Order Age (Days)**: Maximum order age to be eligible for auto-approval.
  - **Return Reason(s)**: Multi-select reasons that qualify for automatic approval.
  - **Resolution Type(s)**: Multi-select resolutions (Refund/Exchange) that qualify.
  - **Customer Group(s)**: Restrict auto-approvals to specific customer groups.
  - **Minimum/Maximum Product Price**: Specify item price limits for automated returns.
  - **Auto-Refund Shipping Costs to Wallet**: Allow automatic refund of shipping costs to the digital wallet.
  - **Send Approval Email Notification**: Turn on automatic email updates.

- ***Pending RMA Alert Settings***
  - **Enable Pending RMA Alert**: Send alert reminders if an RMA remains pending.
  - **Hours Threshold**: Hours of wait before triggering alerts.
  - **Manager Email(s)**: Send notification alerts to listed administrative emails.
  - **Alert Email Template**: Select the template layout.

---

### 2. RMA Wallet Configuration

This integrates the RMA system with the digital store credit wallet. Admin can credit return amounts instantly to customer wallets.


![Wallet System Configuration Settings](/Rmasystem/image/wallet_system/wallet_system_1.png)


- **Enable Wallet for RMA**: Allow customers to select wallet refund as a resolution type.
- **Allow Standard Refund Alongside Wallet**: Allow both traditional offline refunds and digital credit refunds.
- **Auto-Credit Wallet on RMA Approval**: Automatically credit the customer's wallet instantly when an RMA request is marked approved.
- **Allowed Customer Group(s)**: Set customer groups that can use wallet credit returns.

#### Steps for Creating a Refund to Wallet
1. **Configure Wallet Settings**:
   - Ensure the digital wallet is active and **Enable Wallet for RMA** is set to **Yes**.
   - If you want automatic processing on status update, set **Auto-Credit Wallet on RMA Approval** to **Yes**.
2. **Customer Submission**:
   - Customer creates an RMA request and selects **Refund to Wallet** as the resolution type.
3. **Admin Process (Automatic Refund)**:
   - Go to **RMA System > All RMA** and open the RMA request.
   - If **Auto-Credit Wallet on RMA Approval** is **Yes**, select the **Refund** checkbox and change the status of the item to **Refund Initiated** or **Solved**.
   - Click **Update Status**. The system automatically creates a Credit Memo and credits the customer's wallet.
4. **Admin Process (Manual Refund)**:
   - If **Auto-Credit Wallet on RMA Approval** is **No**, go to **Sales > Orders**, select the order, and click **Credit Memo**.
   - Scroll down to the **Refund Totals** section and click the orange **Refund In Wallet** button to manually process the wallet transfer.


![Refund In Wallet Credit Memo Action](/Rmasystem/image/wallet_system/wallet_system_4.png)



![Wallet Transaction Logs and Customer Wallet View](/Rmasystem/image/wallet_system/wallet_system_2.png)



![Customer Account Wallet Dashboard](/Rmasystem/image/wallet_system/wallet_system_3.png)


---

### 3. RMA Fraud Detection Configuration

Configure automated limits to block fraudulent returns and flag high-risk customers based on return behavior.

![Fraud Detection Configuration Rules](/Rmasystem/image/fraud_detection/fraud_detection_1.png)

- ***General Rules Settings***
  - **Enable Fraud & Risk Scoring**: Turn on return monitoring and risk calculation.
  - **Risk Threshold (Number of Returns)**: Set the maximum number of returns allowed within a timeframe before flagging.
  - **Risk Timeframe (Days)**: Rolling period to evaluate return frequencies.
  - **Exclude RMA Status(es) from Calculation**: Ignore specific statuses (e.g., cancelled or declined requests).

- ***Automated Risk Mitigation Actions***
  - **Require Manual Review for High-Risk Customers**: Instantly route requests from high-risk accounts to admin inspection, bypassing any auto-approval rules.

- ***Admin Alerts & Notifications***
  - **Send Email Alert on High-Risk RMA Request**: Notify the store manager when high-risk customer files a return.
  - **Notification Email Address(es)**: Target email list.
  - **Admin Notification Email Template**: Alert message style.


![Fraud Detection Risk Scoring in Admin Grid](/Rmasystem/image/fraud_detection/fraud_detection_2.png)



![Fraud Detection Risk Alert Log](/Rmasystem/image/fraud_detection/fraud_detection_3.png)



![Fraud Detection Risk Alert Log](/Rmasystem/image/fraud_detection/fraud_detection_4.png)



![Fraud Detection Risk Alert Log](/Rmasystem/image/fraud_detection/fraud_detection_5.png)


---

## Product Return RMA System Management

### Manage All RMA & Analytics Dashboard

Now the admin can check the dashboard of the RMA with comprehensive, advanced RMA analytics and reports.


![RMA Analytics Dashboard Overall Stats](/Rmasystem/image/analytics_dashboard/analytics_dashboard_1.png)

![RMA Analytics Dashboard Overall Stats](/Rmasystem/image/analytics_dashboard/analytics_dashboard2.png)

![RMA Analytics Dashboard Overall Stats](/Rmasystem/image/analytics_dashboard/analytics_dashboard_3.png)


The dashboard includes detailed tracking grids for:
- **Total refund given** (amount, total RMA requests, and total RMA products)
- **Total Pending RMAs Value** (financial value and quantities)
- **Total Declined/Canceled RMAs Value** (financial value and quantities)
- **Return Rate & Quantities Over Time** (last 6 months trend analysis)
- **Resolution Type Distribution** (Breakdown of Refund vs Exchange vs Cancel)
- **Most Common Return Reasons** (Bar charts showing main issue drivers)
- **Return rate by product and category** to quickly pinpoint defective inventory items.


![Analytics Report - Top returned categories](/Rmasystem/image/analytics_dashboard/analytics_dashboard_4.png)



![Analytics Report - Monthly Return Trends Graph](/Rmasystem/image/analytics_dashboard/analytics_dashboard_5.png)



![Analytics Report - Daily Return Quantities Graph](/Rmasystem/image/analytics_dashboard/analytics_dashboard_6.png)



![Analytics Grid - Product Return Rates Summary](/Rmasystem/image/analytics_dashboard/analytics_dashboard_7.png)



![Analytics Grid - Category Return Rates Summary](/Rmasystem/image/analytics_dashboard/analytics_dashboard_8.png)



![Analytics Grid - Return Reason Stats](/Rmasystem/image/analytics_dashboard/analytics_dashboard_9.png)



![Analytics Grid - Resolution Distribution Details](/Rmasystem/image/analytics_dashboard/analytics_dashboard_10.png)



![Analytics Grid - Monthly trends detailed grid](/Rmasystem/image/analytics_dashboard/analytics_dashboard_11.png)



![Analytics Grid - Monthly trends detailed grid](/Rmasystem/image/analytics_dashboard/analytics_dashboard_12.png)


---

###  Quick Order Cancellation

Customers can navigate to the RMA section from **My Account**. The module introduces a **Quick Order Cancellation / Return** feature that allows customers to manage cancellations and returns directly from their dashboard.


![Customer Order details page Cancel Action](/Rmasystem/image/cancel_order/order_cancel_1.png)

On the **My Orders** grid, a **Cancel** action button is displayed next to the traditional options. This action is also available on the **Order Detail** pages.



![Customer Order details page Cancel Action](/Rmasystem/image/cancel_order/order_cancel_2.png)



![Customer Order details page Cancel Action](/Rmasystem/image/cancel_order/order_cancel_3.png)


Clicking the button opens a modern, responsive RMA request and cancellation modal popup:


![RMA Request Popup Item Selection](/Rmasystem/image/cancel_order/order_cancel_4.png)


- **Item selection**: Choose which products, return quantities, resolution types, and reasons.
- **Resolution types**:
  1. **Refund**: Request payment refund (cash/offline or credited to store credit e-wallet).
  2. **Exchange**: Exchange the item for another variant.
  3. **Cancel Items**: Request item cancellation (for pending or unfulfilled orders).

---

## GraphQL API Support

Below are the queries and mutations designed to support the new features in headless environments.

### 1. Retrieve RMA Dashboard Statistics (`getRmaStats`)

**Query:**
```graphql
query {
  getRmaStats {
    reasons {
      label
      value
    }
    resolutions {
      type
      label
      value
    }
    top_products {
      name
      sku
      returned
      ordered
      rate
    }
    top_categories {
      name
      value
    }
    rma_counts {
      refunds_given_value
      refunds_given_count
      pending_value
      pending_count
    }
  }
}
```

### 2. Retrieve RMAs by Status (`getRmaByStatus`)

**Query:**
```graphql
query {
  getRmaByStatus(status: "PENDING") {
    id
    order_id
    order_number
    name
    status
    resolution_type
  }
}
```

### 3. Update RMA Status (`updateRmaStatus`)

**Mutation:**
```graphql
mutation {
  updateRmaStatus(id: 10, status: "2") {
    rma_id
    success
    message
  }
}
```

### 4. Cancel RMA Request (`cancelRma`)

**Mutation:**
```graphql
mutation {
  cancelRma(id: 10) {
    rma_id
    success
    message
  }
}
```

---

## REST API Support

The module exposes full CRUD REST endpoints for third-party and mobile application integrations.

### 1. List RMAs
- **Endpoint**: `GET /V1/rma/list`
- **Description**: Returns all RMAs matching filter criteria.

### 2. Create RMA
- **Endpoint**: `POST /V1/rma/create`
- **Description**: Submits a new RMA request.
- **Payload:**
```json
{
  "orderId": 15,
  "customerDeliveryStatus": 1,
  "additionalInfo": "Defective item.",
  "packageCondition": 1,
  "pickupAddress": "123 Green Lane",
  "addressType": 0,
  "pickupTime": 0,
  "customerConsignmentNo": "CON-98712",
  "items": [
    {
      "itemId": 23,
      "rmaQty": 1,
      "resolutionType": 0,
      "reasonId": 2
    }
  ]
}
```

### 3. Update RMA Status
- **Endpoint**: `PUT /V1/rma/:id/status`
- **Description**: Updates the processing status of a specific RMA request.
- **Payload:**
```json
{
  "status": "2"
}
```

### 4. Cancel RMA
- **Endpoint**: `DELETE /V1/rma/:id`
- **Description**: Cancels a specific RMA request.

---

That’s all for the new features in the Magento 2 Return extension. If you still have any issues feel free to add a ticket and let us know your views to make the module better **[http://webkul.uvdesk.com/](http://webkul.uvdesk.com/)**
