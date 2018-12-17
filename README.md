# sviewer image

geOrchestra's Simple viewer (sviewer) in a docker container.

## Environment variables
They correspond to the configuration file etc/customConfig.js
  * DOMAIN_NAME, default to "https://go.sk.pigeosolutions.fr"
  * INITIAL_EXTENT, defaults to "1900000,6000000,2500000,6500000"
  * MAX_EXTENT, defaults to "-20037508.34, -20037508.34, 20037508.34, 20037508.34"
  * RESTRICTED_EXTENT, defaults to "-20037508.34, -20037508.34, 20037508.34, 20037508.34"
  * MAX_FEATURES, defaults to 10

## Build instructions
Clone this repository and the sviewer submodule:
```
git clone --recursive https://github.com/pi-geosolutions/docker-sviewer.git
```
Adjust the code if necessary and then build your docker image:
```
docker build -t [YOUR_DOCKER_IMAGE_NAME] .
```
To run it locally on port 8080:
```
docker run -it --rm --name sviewer1 -p 8080:80 sviewer
```
and browse http://localhost:8080/sviewer

## Integrate sviewer in your geOrchestra infrastructure
This depends on your setup. Supposing your geOrchestra portal is available on https://go.sk.pigeosolutions.fr,
you need to make sure the sviewer is accessible on https://go.sk.pigeosolutions.fr/sviewer.

If this is fulfilled, it should work fine. Just go, on the mapfishapp, to
workspace/share this map, give a title and let the popup open.
