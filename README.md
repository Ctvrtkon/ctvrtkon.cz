<img src="https://github.com/Ctvrtkon/ctvrtkon.cz/raw/master/src/img/logo-ctvrtkon-2.png" />

This is official repositry for [Čtvrtkon](http://ctvrtkon.cz) website. 
Built on top of [Gatsby](https://www.gatsbyjs.org/) and [Netlify CMS](https://www.netlifycms.org). 

## Contribute

All Pull Requests are welcomed

### Prerequisites

- Node (v8.2.0 or higher)
- [Gatsby CLI](https://www.gatsbyjs.org/docs/)

### Access Locally
```
$ git clone https://github.com/Ctvrtkon/ctvrtkon.cz.git
$ cd ctvrtkon.cz
$ yarn
$ yarn run develop
```
To test the CMS locally, you'll need run a production build of the site:
```
$ yarn run build
$ yarn run serve
```

Docker setup
```shell
docker build -t gatsby .
docker run --rm -it -v "$(pwd)/src:/app/src/" -v "$(pwd)/static:/app/static" -w /app -p 8001:8001 gatsby

```

### Setting up the CMS
Follow the [Netlify CMS Quick Start Guide](https://www.netlifycms.org/docs/quick-start/#authentication) to set up authentication, and hosting.

## Maintainers

* [Michal Haták](https://github.com/Twista)
* [Martin Hlaváč](https://github.com/hlavacm)
