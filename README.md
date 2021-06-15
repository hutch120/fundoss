# FundOSS

Ignoring Open Source Software funding is risky business!

Pronounced `fun-doss` (almost called it JAFO - Just Another Funding Option) for your OSS package.

Add fundoss to your devDependencies, create the file `fundoss.json` with your payment checkout link, and we do the rest.

We commit to NEVER selling advertising or providing any data collected to 3rd parties. This project is OSS, you can view all the code used including the Lambda function.

**No data is sent without the permission of the Project Owner** This permission is granted by the Product Owner adding their email address to their product `package.json` `{ "fundoss": "product.owner@business.com" }. Instructions are output to the developer terminal on build if this information is missing.

## Usage

Add `fundoss` to your project.

```
yarn add fundoss --dev
```

Create `fundoss.json` in your package root folder.

```
{
    "checkout": "[Square | Stripe | OtherUrl]"
}
```

Example fundoss.json

```
{
    "checkout": "https://checkout.square.site/merchant/ML4X3BAXV8YM9/checkout/ZEOXA25XTXWPMRKEZJYKEMPA"
}
```

## Fund this project :)

Of course, if you are getting value from this project please pay it on!

https://checkout.square.site/merchant/ML4X3BAXV8YM9/checkout/ZEOXA25XTXWPMRKEZJYKEMPA

## How to generate a checkout link with Square?

Go to https://squareup.com/ and click get started to generate a checkout link.

We have no affiliation with SquareUp, but in our experience is the simplest to get started but feel free to use any other link. E.g. opencollective, stripe, patreon, etc.

## Why build and maintain this OSS project?

- Build and strenghen the OSS community and avoid [this](https://github.com/pedronauck/docz/issues/1634).
- Inspired in part by the [experiment by Feross](https://feross.org/funding-experiment-recap/)
- You don't have to look far for very popular underfunded projects like the [OpenLayers](https://github.com/openlayers/openlayers) package with 8K stars, used for mapping in the browser. Despite a large community it is maintained by just a few dedicated individuals, all with other jobs. It has about 100,000 weekly downloads on NPM, yet the OpenCollective funding amounts to less than two coffees a day (~$8). Another example is [MouseTrap](https://github.com/ccampbell/mousetrap), 10K stars and a [Github issue lists](https://github.com/ccampbell/mousetrap/issues) full of feature requests that are unanswered by maintainers. No releases to MouseTrap in over 6 months and no major commits in well over a year with some features broken in major browsers.

## Definitions

- [OSS](https://en.wikipedia.org/wiki/Open-source_software): Open Source Software or similarly licenced
- [Business](https://en.wikipedia.org/wiki/Business): An organization engaged in commercial activities. 
- [Product](https://en.wikipedia.org/wiki/Product_(business)): A commercial offering owned and sold by a Business.
- [Product Owner](https://en.wikipedia.org/wiki/Scrum_(software_development)#Product_owner): A person/individual in an organisation responsible for the success of a Product that utilises OSS.
- [Funding](https://en.wikipedia.org/wiki/Funding): Income received by the OSS maintainers from a Business using OSS as part of their Product.

## What are the project goals?

 - Communicate OSS funding goals to Business Product Owners
 - Increase Funding to OSS maintainers
 - Educate Product Owners of the benefits of being part of an OSS community
 - Inform Product Owners of the risks of underfunded OSS
 - Encourage Businesses to engage with OSS communities in line with OSS philosophy

## How does it work?

- When a developer builds their project this package will search for fundoss.json files in node_modules and send the product owners email and the package names to our AWS lambda function.
- This info will be collated and an email will be sent out at most once a week to the Product Owners with some messaging about OSS funding.

## What is communicated?

- Communicate Value: OSS provides value to Businesses that is simply not understood, let them know the Benefits of OSS such as Community, complex features, and much more.
- Communicate Risk: Inform Businesses of the Risks of underfunded OSS in their Products such as missing features, broken functionality, security patching to name a few.
- Simplify funding process: Make it easy to fund OSS, embed one click payments into communications e.g. Square One Click Payments (https://squareup.com/au/en/online-checkout).

## Sending data

- This project only triggers our AWS lambda function if the Product Owners email has been entered in the products package.json.
- The only information sent to the AWS lambda function is the Product Owners email and a list of packages with the fundoss included. Note this does NOT include the funding checkout link which is retrieved from the public Github package.