# Create your own blog using Eleventy and Storyblok (with preview mode available!)

A starter repository for a blog web site using Eleventy and Storyblok

## Getting started

1. Make a directory and navigate to it: 

```
mkdir my-blog-name
cd my-blog-name
```

2. Clone this repository

```
git clone https://github.com/guaca/11ty-storyblok-preview-template/
```

3. Install dependencies

```
npm install
```

4. Create a Storyblok space and generate your data

Follow the steps described in this <a href="http://estelafranco/blog/eleventy-storyblok-3/" target="_blank" rel="noopener">article</a> to create the <a href="https://get.storyblok.com/estela-franco-cuenca" target="_blank" rel="noopener">Storyblok</a> space and the basic required data (one author, one category, one article and homepage data).

5. Add your .env variables

- In Storyblok, go to `Settings > Access Tokens` and copy or generate the token. Depending on your needs, it can be a Preview or a Public one. 
- You will also need the `Home id` of the Home page you have created in Storyblok (see <a href="http://estelafranco/blog/eleventy-storyblok-3/#17.-create-the-home-related-files" target="_blank" rel="noopener">here</a> for more details on how to get it).
- Create a `.env` file in your local repository and add the following content: 

```
STORYBLOK_API_KEY="[your-storyblok-token]"
VERSION="draft for preview or published for build"
HOME_ID="[your-home-id]"
DOMAIN="[your-website-domain]"
IS_SERVERLESS="[true for preview mode or false for build mode]"
```

6. Run Eleventy
You can generate a production-ready build to the `_site` folder: 

```
npx @11ty/eleventy
```

Or build and host on a local development server: 

```
npx @11ty/eleventy --serve
```

Or run Netlify Functions locally to use the Eleventy Serverless plugin (and regenerate Storyblok data on demand):

```
npx netlify dev
```

7. Deploy on Netlify
You can deploy your project on Netlify instead of running your project locally. Depending on your goal, you can use the `main` or the `preview` branch. Keep in mind that the differences 
  - Build Mode: Use the `main` branch to deploy your site as a static site.
  - Preview Mode: Use the `preview` branch if you want deploy your site leveraging the Netlify Servlerless functions to enable the preview functionality in the Storyblok Visual Editor.


## Demo and screeenshots
### Build Mode
- Demo on Netlify: [https://11ty-storyblok-template.netlify.app](https://11ty-storyblok-template.netlify.app)

- Screenshots:
    - Homepage
    <img src="https://estelafranco.com/img/11ty-storyblok-blog/home.webp">

    - Articles List
    <img src="https://estelafranco.com/img/11ty-storyblok-blog/articles-list.webp">

    - Article Page
    <img src="https://estelafranco.com/img/11ty-storyblok-blog/article-page.webp">

    - Authors List
    <img src="https://estelafranco.com/img/11ty-storyblok-blog/authors-list.webp">

    - Author Page
    <img src="https://estelafranco.com/img/11ty-storyblok-blog/author-page.webp">

    - Categories List
    <img src="https://estelafranco.com/img/11ty-storyblok-blog/categories-list.webp">

    - Category Page
    <img src="https://estelafranco.com/img/11ty-storyblok-blog/category-page.webp">

### Preview Mode
- Demo on Netlify: [https://11ty-storyblok-template.netlify.app](https://11ty-storyblok-preview-template.netlify.app)

- Screenshots:
[pending to update]