World Of Tzedaka

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

1.APIS >>

\*banquestAPI.js

axios = Axios is a promise-based HTTP Client for node.js and the browser. It is isomorphic (= it can run in the browser and nodejs with the same codebase).
cookies = A cookie is a piece of data from a website that is stored within a web browser that the website can retrieve at a later time.

baseURL = "https://api.sandbox.banquestgateway.com/api/v2/transactions/"(Payment API)

Banquest Payment Systems offers fast, safe, intuitive transaction processing for traditional retailers, ecommerce merchants, service businesses and SaaS providers everywhere.

headers = axios is a flexible and robust HTTP client. Learn different ways Axios can be used to set request headers for API calls

\*userAPI.js

Variable:NEXT_PUBLIC_BASEURL=<API IP ADDRESS>

functions:axiosInstance.interceptors.request.use =
You can intercept requests or responses before they are handled by then or catch . // Add a request interceptor axios.

functions:headers.Authorization=
The HTTP Authorization request header contains the credentials to authenticate a user agent with a server. APIs use authorization to ensure that client requests

2. Components > ACHUI.js

motion = Framer Motion is a production-ready motion library for React from Framer.
It's simple yet powerful, allowing you to express complex user interactions with robust, semantic markup.
NumberFormat = React component to format number in an input or as a text.

3. Campaigns > campaignsList.js

useEffect = By using this Hook, you tell React that your component needs to do something after render.
useState = The React useState Hook allows us to track state in a function component. State generally refers to data.

functions:
updateCamping() = It will update the campaign by id.
onStatuschange() = pass function as a property to onStatusChange.

Campaigns > CreateCampaigns : CampaignFeature.js, CharityButtons.js , ScreenDetails.js, CampaignBanner.js

Chakra UI = Chakra UI is a modern component library for React. It comes with a set of reusable and composable React components that you may use to create front-end apps. Its power comes from its simplicity, modularity, and accessibility.

Stack,FormLabel,Drawer,DrawerBody,DrawerFooterDrawerHeader,DrawerOverlay,DrawerContent,InputLeftAddon,InputRightAddon,InputGroup,Select,Input,DrawerCloseButton,useDisclosure, Button,Textarea,NumberInput, etc are the chakra UI components.

DatePicker = The React Date Picker is a helpful and abundant Component used to display dates using the calendar dialog format.

functions:
*handleCharityButtonUpdate = function(event) that will update the charity after button clicked.
*handleCharityButtonDelete = function(event) that will delete the HUD after button clicked.

4. CreditCard > CreditcardHandler.js....
   CreditcardHandler() = it will handle the Value of the CreditCard .
   cardExpiry() = it will handle the cardExpiry date.

5. CRM > DASHBOARD > dashboard.js
   Balance ,DonationMoneyInHand ,HeartInHands ,Sound ,WithdrawMoney are the Components...

6.CRM > Header & Footer
Header,Footer,Markups

9. Components >Input >input.js

onchange() = The onchange event occurs when the value of an element has been changed.

10.Loader >loader.js ::Spinners can be used to show the loading state in your projects 11. Registration > registration.js ::
there are some fake data to use as demo to build form.

12. PAGES > Campaigns > index.js

dispatch() = it will handle the is a function of the Redux store. You call store. dispatch to dispatch an action.

in pages folder there are html & some hooks which is already defined on top.

13.selectedSwitcherSlice.js

createSlice() = A function that accepts an initial state, an object of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.

14.store.js
Reducer()= The reducer is a pure function that accepts 2 parameters: the current state and an action object

15.Public Folder Has A favicon only,Style folder has CSS styling
