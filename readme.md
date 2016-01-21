## Redpanther Github page

[![](http://redpanthers.co/assets/logo-10f65a18d4cd28c7812f56f073b8407ff1ea955982d508158de2ec4c53a09a86.png)](http://redpanthers.co)

Website for Redpanther's Opensource Projects, Talks and more

Visit [Website](http://redpanthers.co), [blog](http://blog.redpanthers.co) to know more about us.

#### Technologies used

- Angular JS and UI Router
- Middleman
- Live reload
- SASS/SCSS
- Webstorm

#### Development

1. To make changes to the source code clone the repo using:

```git clone git@github.com:redpanthers/redpanthers.github.io.git```

2. Install the required gems

```bundle install```

3. To run the site in your browser, Run middleman server using:

```
middleman server
```

#### Deployment

Source code changes shoud be committed and pushed to `source` branch, and the generated static site to `gh-pages` branch.

1. After making the necessary changes, push the source code to `source`.

2. Build the middleman site using:

```
middleman build
```

3. Deploy the site using:

```
middleman deploy
```
