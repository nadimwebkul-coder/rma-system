<template><div><h1 id="user-guide-of-magento-2-product-return-rma-—-new-features" tabindex="-1"><a class="header-anchor" href="#user-guide-of-magento-2-product-return-rma-—-new-features"><span>User Guide of Magento 2 Product Return RMA — New Features</span></a></h1>
<p>Updated June 2026</p>
<p><a href="https://magento2demo.webkul.in/modules-demo/?demo=Webkul_Rmasystem" target="_blank" rel="noopener noreferrer">Live Demo</a></p>
<p><a href="https://store.webkul.com/magento2-rma-extension.html" target="_blank" rel="noopener noreferrer">Magento 2 RMA</a> plugin allows managing customer requests related to product returns, refunds, exchanges, and order cancellations.</p>
<p>The following guide outlines the latest advanced features implemented in the Magento 2 RMA system. These features introduce workflow automation, deep analytics dashboards, store credit wallet refunds, fraud risk scoring, quick order cancellation popups, and complete API coverage.</p>
<h2 id="new-features-of-product-return-rma" tabindex="-1"><a class="header-anchor" href="#new-features-of-product-return-rma"><span>New Features of Product Return RMA</span></a></h2>
<ul>
<li><strong>Automated Workflow Rules Engine</strong>: Automate RMA approvals, routing, and alerts using conditional logical rules.</li>
<li><strong>Analytics &amp; Reporting Dashboard</strong>: Track performance with daily, weekly, monthly charts for refunds, pending value, declined value, return rates, and top returned products.</li>
<li><strong>RMA Wallet Credit System</strong>: Refund return amounts directly into the customer's digital store credit wallet.</li>
<li><strong>Fraud Detection &amp; Risk Scoring</strong>: Automatically score customer risk and track frequency of returns to prevent return abuse.</li>
<li><strong>Quick Order Cancellation</strong>: Allow customers to initiate returns/cancellations directly from order lists and order details pages with an advanced popup.</li>
<li><strong>Complete REST &amp; GraphQL API Support</strong>: Full headless commerce and mobile application integration.</li>
</ul>
<hr>
<h2 id="configuration-of-product-return-rma" tabindex="-1"><a class="header-anchor" href="#configuration-of-product-return-rma"><span>Configuration of Product Return RMA</span></a></h2>
<p>Under <code v-pre>RMA System &gt; RMA Configuration</code>, the admin can configure newly introduced automation, wallet refund, and fraud detection features:</p>
<h3 id="_1-automated-workflow-configuration" tabindex="-1"><a class="header-anchor" href="#_1-automated-workflow-configuration"><span>1. Automated Workflow Configuration</span></a></h3>
<p>This setting allows the admin to set up automatic logic gates to authorize returns instantly, saving human verification time.</p>
<p><img src="/Rmasystem/image/automated_workflow/automated_workflow_1.png" alt="Automated Workflow Configuration General Settings"></p>
<p><img src="/Rmasystem/image/automated_workflow/automated_workflow_2.png" alt="Automated Workflow Configuration General Settings"></p>
<ul>
<li>
<p><em><strong>General Rules Settings</strong></em></p>
<ul>
<li><strong>Enable Rules Engine</strong>: Master toggle to enable/disable automated processing.</li>
</ul>
</li>
<li>
<p><em><strong>Auto-Approve Rules</strong></em></p>
<ul>
<li><strong>Enable Auto-Approve Rules</strong>: Turn on automated approvals.</li>
<li><strong>Max Order Age (Days)</strong>: Maximum order age to be eligible for auto-approval.</li>
<li><strong>Return Reason(s)</strong>: Multi-select reasons that qualify for automatic approval.</li>
<li><strong>Resolution Type(s)</strong>: Multi-select resolutions (Refund/Exchange) that qualify.</li>
<li><strong>Customer Group(s)</strong>: Restrict auto-approvals to specific customer groups.</li>
<li><strong>Minimum/Maximum Product Price</strong>: Specify item price limits for automated returns.</li>
<li><strong>Auto-Refund Shipping Costs to Wallet</strong>: Allow automatic refund of shipping costs to the digital wallet.</li>
<li><strong>Send Approval Email Notification</strong>: Turn on automatic email updates.</li>
</ul>
</li>
<li>
<p><em><strong>Pending RMA Alert Settings</strong></em></p>
<ul>
<li><strong>Enable Pending RMA Alert</strong>: Send alert reminders if an RMA remains pending.</li>
<li><strong>Hours Threshold</strong>: Hours of wait before triggering alerts.</li>
<li><strong>Manager Email(s)</strong>: Send notification alerts to listed administrative emails.</li>
<li><strong>Alert Email Template</strong>: Select the template layout.</li>
</ul>
</li>
</ul>
<hr>
<h3 id="_2-rma-wallet-configuration" tabindex="-1"><a class="header-anchor" href="#_2-rma-wallet-configuration"><span>2. RMA Wallet Configuration</span></a></h3>
<p>This integrates the RMA system with the digital store credit wallet. Admin can credit return amounts instantly to customer wallets.</p>
<p><img src="/Rmasystem/image/wallet_system/wallet_system_1.png" alt="Wallet System Configuration Settings"></p>
<ul>
<li><strong>Enable Wallet for RMA</strong>: Allow customers to select wallet refund as a resolution type.</li>
<li><strong>Allow Standard Refund Alongside Wallet</strong>: Allow both traditional offline refunds and digital credit refunds.</li>
<li><strong>Auto-Credit Wallet on RMA Approval</strong>: Automatically credit the customer's wallet instantly when an RMA request is marked approved.</li>
<li><strong>Allowed Customer Group(s)</strong>: Set customer groups that can use wallet credit returns.</li>
</ul>
<h4 id="steps-for-creating-a-refund-to-wallet" tabindex="-1"><a class="header-anchor" href="#steps-for-creating-a-refund-to-wallet"><span>Steps for Creating a Refund to Wallet</span></a></h4>
<ol>
<li><strong>Configure Wallet Settings</strong>:
<ul>
<li>Ensure the digital wallet is active and <strong>Enable Wallet for RMA</strong> is set to <strong>Yes</strong>.</li>
<li>If you want automatic processing on status update, set <strong>Auto-Credit Wallet on RMA Approval</strong> to <strong>Yes</strong>.</li>
</ul>
</li>
<li><strong>Customer Submission</strong>:
<ul>
<li>Customer creates an RMA request and selects <strong>Refund to Wallet</strong> as the resolution type.</li>
</ul>
</li>
<li><strong>Admin Process (Automatic Refund)</strong>:
<ul>
<li>Go to <strong>RMA System &gt; All RMA</strong> and open the RMA request.</li>
<li>If <strong>Auto-Credit Wallet on RMA Approval</strong> is <strong>Yes</strong>, select the <strong>Refund</strong> checkbox and change the status of the item to <strong>Refund Initiated</strong> or <strong>Solved</strong>.</li>
<li>Click <strong>Update Status</strong>. The system automatically creates a Credit Memo and credits the customer's wallet.</li>
</ul>
</li>
<li><strong>Admin Process (Manual Refund)</strong>:
<ul>
<li>If <strong>Auto-Credit Wallet on RMA Approval</strong> is <strong>No</strong>, go to <strong>Sales &gt; Orders</strong>, select the order, and click <strong>Credit Memo</strong>.</li>
<li>Scroll down to the <strong>Refund Totals</strong> section and click the orange <strong>Refund In Wallet</strong> button to manually process the wallet transfer.</li>
</ul>
</li>
</ol>
<p><img src="/Rmasystem/image/wallet_system/wallet_system_4.png" alt="Refund In Wallet Credit Memo Action"></p>
<p><img src="/Rmasystem/image/wallet_system/wallet_system_2.png" alt="Wallet Transaction Logs and Customer Wallet View"></p>
<p><img src="/Rmasystem/image/wallet_system/wallet_system_3.png" alt="Customer Account Wallet Dashboard"></p>
<hr>
<h3 id="_3-rma-fraud-detection-configuration" tabindex="-1"><a class="header-anchor" href="#_3-rma-fraud-detection-configuration"><span>3. RMA Fraud Detection Configuration</span></a></h3>
<p>Configure automated limits to block fraudulent returns and flag high-risk customers based on return behavior.</p>
<p><img src="/Rmasystem/image/fraud_detection/fraud_detection_1.png" alt="Fraud Detection Configuration Rules"></p>
<ul>
<li>
<p><em><strong>General Rules Settings</strong></em></p>
<ul>
<li><strong>Enable Fraud &amp; Risk Scoring</strong>: Turn on return monitoring and risk calculation.</li>
<li><strong>Risk Threshold (Number of Returns)</strong>: Set the maximum number of returns allowed within a timeframe before flagging.</li>
<li><strong>Risk Timeframe (Days)</strong>: Rolling period to evaluate return frequencies.</li>
<li><strong>Exclude RMA Status(es) from Calculation</strong>: Ignore specific statuses (e.g., cancelled or declined requests).</li>
</ul>
</li>
<li>
<p><em><strong>Automated Risk Mitigation Actions</strong></em></p>
<ul>
<li><strong>Require Manual Review for High-Risk Customers</strong>: Instantly route requests from high-risk accounts to admin inspection, bypassing any auto-approval rules.</li>
</ul>
</li>
<li>
<p><em><strong>Admin Alerts &amp; Notifications</strong></em></p>
<ul>
<li><strong>Send Email Alert on High-Risk RMA Request</strong>: Notify the store manager when high-risk customer files a return.</li>
<li><strong>Notification Email Address(es)</strong>: Target email list.</li>
<li><strong>Admin Notification Email Template</strong>: Alert message style.</li>
</ul>
</li>
</ul>
<p><img src="/Rmasystem/image/fraud_detection/fraud_detection_2.png" alt="Fraud Detection Risk Scoring in Admin Grid"></p>
<p><img src="/Rmasystem/image/fraud_detection/fraud_detection_3.png" alt="Fraud Detection Risk Alert Log"></p>
<p><img src="/Rmasystem/image/fraud_detection/fraud_detection_4.png" alt="Fraud Detection Risk Alert Log"></p>
<p><img src="/Rmasystem/image/fraud_detection/fraud_detection_5.png" alt="Fraud Detection Risk Alert Log"></p>
<hr>
<h2 id="product-return-rma-system-management" tabindex="-1"><a class="header-anchor" href="#product-return-rma-system-management"><span>Product Return RMA System Management</span></a></h2>
<h3 id="manage-all-rma-analytics-dashboard" tabindex="-1"><a class="header-anchor" href="#manage-all-rma-analytics-dashboard"><span>Manage All RMA &amp; Analytics Dashboard</span></a></h3>
<p>Now the admin can check the dashboard of the RMA with comprehensive, advanced RMA analytics and reports.</p>
<p><img src="/Rmasystem/image/analytics_dashboard/analytics_dashboard_1.png" alt="RMA Analytics Dashboard Overall Stats"></p>
<p><img src="/Rmasystem/image/analytics_dashboard/analytics_dashboard_2.png" alt="RMA Analytics Dashboard Overall Stats"></p>
<p><img src="/Rmasystem/image/analytics_dashboard/analytics_dashboard_3.png" alt="RMA Analytics Dashboard Overall Stats"></p>
<p>The dashboard includes detailed tracking grids for:</p>
<ul>
<li><strong>Total refund given</strong> (amount, total RMA requests, and total RMA products)</li>
<li><strong>Total Pending RMAs Value</strong> (financial value and quantities)</li>
<li><strong>Total Declined/Canceled RMAs Value</strong> (financial value and quantities)</li>
<li><strong>Return Rate &amp; Quantities Over Time</strong> (last 6 months trend analysis)</li>
<li><strong>Resolution Type Distribution</strong> (Breakdown of Refund vs Exchange vs Cancel)</li>
<li><strong>Most Common Return Reasons</strong> (Bar charts showing main issue drivers)</li>
<li><strong>Return rate by product and category</strong> to quickly pinpoint defective inventory items.</li>
</ul>
<p><img src="/Rmasystem/image/analytics_dashboard/analytics_dashboard_4.png" alt="Analytics Report - Top returned categories"></p>
<p><img src="/Rmasystem/image/analytics_dashboard/analytics_dashboard_5.png" alt="Analytics Report - Monthly Return Trends Graph"></p>
<p><img src="/Rmasystem/image/analytics_dashboard/analytics_dashboard_6.png" alt="Analytics Report - Daily Return Quantities Graph"></p>
<p><img src="/Rmasystem/image/analytics_dashboard/analytics_dashboard_7.png" alt="Analytics Grid - Product Return Rates Summary"></p>
<p><img src="/Rmasystem/image/analytics_dashboard/analytics_dashboard_8.png" alt="Analytics Grid - Category Return Rates Summary"></p>
<p><img src="/Rmasystem/image/analytics_dashboard/analytics_dashboard_9.png" alt="Analytics Grid - Return Reason Stats"></p>
<p><img src="/Rmasystem/image/analytics_dashboard/analytics_dashboard_10.png" alt="Analytics Grid - Resolution Distribution Details"></p>
<p><img src="/Rmasystem/image/analytics_dashboard/analytics_dashboard_11.png" alt="Analytics Grid - Monthly trends detailed grid"></p>
<p><img src="/Rmasystem/image/analytics_dashboard/analytics_dashboard_12.png" alt="Analytics Grid - Monthly trends detailed grid"></p>
<hr>
<h3 id="quick-order-cancellation" tabindex="-1"><a class="header-anchor" href="#quick-order-cancellation"><span>Quick Order Cancellation</span></a></h3>
<p>Customers can navigate to the RMA section from <strong>My Account</strong>. The module introduces a <strong>Quick Order Cancellation / Return</strong> feature that allows customers to manage cancellations and returns directly from their dashboard.</p>
<p><img src="/Rmasystem/image/cancel_order/order_cancel_1.png" alt="Customer Order details page Cancel Action"></p>
<p>On the <strong>My Orders</strong> grid, a <strong>Cancel</strong> action button is displayed next to the traditional options. This action is also available on the <strong>Order Detail</strong> pages.</p>
<p><img src="/Rmasystem/image/cancel_order/order_cancel_2.png" alt="Customer Order details page Cancel Action"></p>
<p><img src="/Rmasystem/image/cancel_order/order_cancel_3.png" alt="Customer Order details page Cancel Action"></p>
<p>Clicking the button opens a modern, responsive RMA request and cancellation modal popup:</p>
<p><img src="/Rmasystem/image/cancel_order/order_cancel_4.png" alt="RMA Request Popup Item Selection"></p>
<ul>
<li><strong>Item selection</strong>: Choose which products, return quantities, resolution types, and reasons.</li>
<li><strong>Resolution types</strong>:
<ol>
<li><strong>Refund</strong>: Request payment refund (cash/offline or credited to store credit e-wallet).</li>
<li><strong>Exchange</strong>: Exchange the item for another variant.</li>
<li><strong>Cancel Items</strong>: Request item cancellation (for pending or unfulfilled orders).</li>
</ol>
</li>
</ul>
<hr>
<h2 id="graphql-api-support" tabindex="-1"><a class="header-anchor" href="#graphql-api-support"><span>GraphQL API Support</span></a></h2>
<p>Below are the queries and mutations designed to support the new features in headless environments.</p>
<h3 id="_1-retrieve-rma-dashboard-statistics-getrmastats" tabindex="-1"><a class="header-anchor" href="#_1-retrieve-rma-dashboard-statistics-getrmastats"><span>1. Retrieve RMA Dashboard Statistics (<code v-pre>getRmaStats</code>)</span></a></h3>
<p><strong>Query:</strong></p>
<div class="language-graphql line-numbers-mode" data-highlighter="prismjs" data-ext="graphql"><pre v-pre><code><span class="line"><span class="token keyword">query</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token object">getRmaStats</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token object">reasons</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">label</span></span>
<span class="line">      <span class="token property">value</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token object">resolutions</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">type</span></span>
<span class="line">      <span class="token property">label</span></span>
<span class="line">      <span class="token property">value</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token object">top_products</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">name</span></span>
<span class="line">      <span class="token property">sku</span></span>
<span class="line">      <span class="token property">returned</span></span>
<span class="line">      <span class="token property">ordered</span></span>
<span class="line">      <span class="token property">rate</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token object">top_categories</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">name</span></span>
<span class="line">      <span class="token property">value</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token object">rma_counts</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">refunds_given_value</span></span>
<span class="line">      <span class="token property">refunds_given_count</span></span>
<span class="line">      <span class="token property">pending_value</span></span>
<span class="line">      <span class="token property">pending_count</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-retrieve-rmas-by-status-getrmabystatus" tabindex="-1"><a class="header-anchor" href="#_2-retrieve-rmas-by-status-getrmabystatus"><span>2. Retrieve RMAs by Status (<code v-pre>getRmaByStatus</code>)</span></a></h3>
<p><strong>Query:</strong></p>
<div class="language-graphql line-numbers-mode" data-highlighter="prismjs" data-ext="graphql"><pre v-pre><code><span class="line"><span class="token keyword">query</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property-query">getRmaByStatus</span><span class="token punctuation">(</span><span class="token attr-name">status</span><span class="token punctuation">:</span> <span class="token string">"PENDING"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">id</span></span>
<span class="line">    <span class="token property">order_id</span></span>
<span class="line">    <span class="token property">order_number</span></span>
<span class="line">    <span class="token property">name</span></span>
<span class="line">    <span class="token property">status</span></span>
<span class="line">    <span class="token property">resolution_type</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-update-rma-status-updatermastatus" tabindex="-1"><a class="header-anchor" href="#_3-update-rma-status-updatermastatus"><span>3. Update RMA Status (<code v-pre>updateRmaStatus</code>)</span></a></h3>
<p><strong>Mutation:</strong></p>
<div class="language-graphql line-numbers-mode" data-highlighter="prismjs" data-ext="graphql"><pre v-pre><code><span class="line"><span class="token keyword">mutation</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property-query property-mutation">updateRmaStatus</span><span class="token punctuation">(</span><span class="token attr-name">id</span><span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token attr-name">status</span><span class="token punctuation">:</span> <span class="token string">"2"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">rma_id</span></span>
<span class="line">    <span class="token property">success</span></span>
<span class="line">    <span class="token property">message</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-cancel-rma-request-cancelrma" tabindex="-1"><a class="header-anchor" href="#_4-cancel-rma-request-cancelrma"><span>4. Cancel RMA Request (<code v-pre>cancelRma</code>)</span></a></h3>
<p><strong>Mutation:</strong></p>
<div class="language-graphql line-numbers-mode" data-highlighter="prismjs" data-ext="graphql"><pre v-pre><code><span class="line"><span class="token keyword">mutation</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property-query property-mutation">cancelRma</span><span class="token punctuation">(</span><span class="token attr-name">id</span><span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">rma_id</span></span>
<span class="line">    <span class="token property">success</span></span>
<span class="line">    <span class="token property">message</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="rest-api-support" tabindex="-1"><a class="header-anchor" href="#rest-api-support"><span>REST API Support</span></a></h2>
<p>The module exposes full CRUD REST endpoints for third-party and mobile application integrations.</p>
<h3 id="_1-list-rmas" tabindex="-1"><a class="header-anchor" href="#_1-list-rmas"><span>1. List RMAs</span></a></h3>
<ul>
<li><strong>Endpoint</strong>: <code v-pre>GET /V1/rma/list</code></li>
<li><strong>Description</strong>: Returns all RMAs matching filter criteria.</li>
</ul>
<h3 id="_2-create-rma" tabindex="-1"><a class="header-anchor" href="#_2-create-rma"><span>2. Create RMA</span></a></h3>
<ul>
<li><strong>Endpoint</strong>: <code v-pre>POST /V1/rma/create</code></li>
<li><strong>Description</strong>: Submits a new RMA request.</li>
<li><strong>Payload:</strong></li>
</ul>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"orderId"</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"customerDeliveryStatus"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"additionalInfo"</span><span class="token operator">:</span> <span class="token string">"Defective item."</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"packageCondition"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"pickupAddress"</span><span class="token operator">:</span> <span class="token string">"123 Green Lane"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"addressType"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"pickupTime"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"customerConsignmentNo"</span><span class="token operator">:</span> <span class="token string">"CON-98712"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"items"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"itemId"</span><span class="token operator">:</span> <span class="token number">23</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"rmaQty"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"resolutionType"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"reasonId"</span><span class="token operator">:</span> <span class="token number">2</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-update-rma-status" tabindex="-1"><a class="header-anchor" href="#_3-update-rma-status"><span>3. Update RMA Status</span></a></h3>
<ul>
<li><strong>Endpoint</strong>: <code v-pre>PUT /V1/rma/:id/status</code></li>
<li><strong>Description</strong>: Updates the processing status of a specific RMA request.</li>
<li><strong>Payload:</strong></li>
</ul>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"status"</span><span class="token operator">:</span> <span class="token string">"2"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-cancel-rma" tabindex="-1"><a class="header-anchor" href="#_4-cancel-rma"><span>4. Cancel RMA</span></a></h3>
<ul>
<li><strong>Endpoint</strong>: <code v-pre>DELETE /V1/rma/:id</code></li>
<li><strong>Description</strong>: Cancels a specific RMA request.</li>
</ul>
<hr>
<p>That’s all for the new features in the Magento 2 Return extension. If you still have any issues feel free to add a ticket and let us know your views to make the module better <strong><a href="http://webkul.uvdesk.com/" target="_blank" rel="noopener noreferrer">http://webkul.uvdesk.com/</a></strong></p>
</div></template>


