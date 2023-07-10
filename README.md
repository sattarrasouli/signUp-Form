
# sign up form

a sign up form with two steps, 
using reactjs, react-query, formik and tailwind.

## API Reference

#### Post all items

```http base url
  POST https://jsonplaceholder.typecode.com
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `/posts ` | `string` | send form data to this api except photo |

## Run

yarn 

yarn dev

## Appendix

i used tailwind instead of mui because it's trendy these days.

i post forms to jsonplaceholder except the photo.
couldn't find proper free api to post photo due to my poor internet connection and time.
i used .env for all stages because we don't need the others in this test project.
and it's not ignored.

i tried to keep it simple and not adding any packages.
only used axios to make http request.
