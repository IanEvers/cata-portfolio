import { createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const assets = {
  "/cata.jpeg": {
    "type": "image/jpeg",
    "etag": "\"4efe0-DxgzcNPpTNtd9jzyXxksyj4b7UY\"",
    "mtime": "2022-03-21T04:32:15.448Z",
    "path": "../public/cata.jpeg"
  },
  "/_nuxt/bootstrap-5855f283.mjs": {
    "type": "application/javascript",
    "etag": "\"12ca0-nsG/beXAscuP68bY/5qxTWbDEyA\"",
    "mtime": "2022-03-21T06:36:12.269Z",
    "path": "../public/_nuxt/bootstrap-5855f283.mjs"
  },
  "/_nuxt/cata.jpeg": {
    "type": "image/jpeg",
    "etag": "\"4efe0-DxgzcNPpTNtd9jzyXxksyj4b7UY\"",
    "mtime": "2022-03-21T04:32:15.448Z",
    "path": "../public/_nuxt/cata.jpeg"
  },
  "/_nuxt/entry-68f8ae77.mjs": {
    "type": "application/javascript",
    "etag": "\"47-1INBmGkgnZxJX+QnzHJyK7oQNGQ\"",
    "mtime": "2022-03-21T06:36:12.269Z",
    "path": "../public/_nuxt/entry-68f8ae77.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"228-6GEEVr9uD5e3D0XSrkiklRNStbA\"",
    "mtime": "2022-03-21T06:36:12.269Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/assets/bootstrap.47dfbeea.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"53e-LdCfceEDKYIB0w7qW/EtnIm5dOA\"",
    "mtime": "2022-03-21T06:36:12.269Z",
    "path": "../public/_nuxt/assets/bootstrap.47dfbeea.css"
  },
  "/_nuxt/assets/Montserrat-VariableFont_wght.f35fdf51.ttf": {
    "type": "font/ttf",
    "etag": "\"60414-ZtxXSdisjFbWndBinZfdN/fbcHg\"",
    "mtime": "2022-03-21T06:36:12.269Z",
    "path": "../public/_nuxt/assets/Montserrat-VariableFont_wght.f35fdf51.ttf"
  }
};

const mainDir = dirname(fileURLToPath(globalThis.entryURL));

function readAsset (id) {
  return promises.readFile(resolve(mainDir, getAsset(id).path))
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const PUBLIC_PATH = "/_nuxt/";
const TWO_DAYS = 2 * 60 * 60 * 24;
const STATIC_ASSETS_BASE = "C:/Users/Ian/Desktop/Código/cata-portfolio/dist" + "/" + "1647844570";
async function serveStatic(req, res) {
  if (!METHODS.includes(req.method)) {
    return;
  }
  let id = withLeadingSlash(withoutTrailingSlash(parseURL(req.url).pathname));
  let asset = getAsset(id);
  if (!asset) {
    const _id = id + "/index.html";
    const _asset = getAsset(_id);
    if (_asset) {
      asset = _asset;
      id = _id;
    }
  }
  if (!asset) {
    if (id.startsWith(PUBLIC_PATH) && !id.startsWith(STATIC_ASSETS_BASE)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    res.statusCode = 304;
    return res.end("Not Modified (etag)");
  }
  const ifModifiedSinceH = req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      res.statusCode = 304;
      return res.end("Not Modified (mtime)");
    }
  }
  if (asset.type) {
    res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag) {
    res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime) {
    res.setHeader("Last-Modified", asset.mtime);
  }
  if (id.startsWith(PUBLIC_PATH)) {
    res.setHeader("Cache-Control", `max-age=${TWO_DAYS}, immutable`);
  }
  const contents = await readAsset(id);
  return res.end(contents);
}

export { serveStatic as default };
