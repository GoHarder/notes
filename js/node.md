# Node.js <!-- omit in toc -->

## Sections <!-- omit in toc -->

- [Create a Cipher](#create-a-cipher)
- [Something to look into](#something-to-look-into)

---

## Create a Cipher

```js
const { createCipheriv, randomBytes, createDecipheriv } = require('crypto');
const jwt = require('jsonwebtoken');

const iat = Math.floor(Date.now() / 1000); // Issue date
const exp = Math.floor(Date.now() / 1000) + 60 * 60; // Expiration date
const keyVectorMap = new Map();

const token = {
   _id: '6021a01118d2e8d3db09cf27',
   role: 'super',
   iat,
   exp,
};

const hashStr = 'camelToe';

const key = randomBytes(32).toString('hex');
const iv = randomBytes(16).toString('hex');

console.log(key);
console.log(iv);

const keyBuffer = Buffer.from(key, 'hex');
const ivBuffer = Buffer.from(iv, 'hex');

const cipher = createCipheriv('aes-256-gcm', keyBuffer, ivBuffer);
const decipher = createCipheriv('aes-256-gcm', keyBuffer, ivBuffer);

// const oldKey = randomBytes(32);
// const oldIv = randomBytes(16);

// const cipher = createCipheriv('aes-256-gcm', key, iv);

// const encryped = cipher.update(string, 'utf-8', 'hex') + cipher.final('hex');

// const decipher = createCipheriv('aes-256-gcm', key, iv);

// const decrypted = decipher.update(encryped, 'hex', 'utf-8') + decipher.final('utf-8');

// console.log(encryped);
// console.log(decrypted);

// console.log(payload);

// console.log(JSON.parse(decrypted));

// jwt.sign(payload, hashStr, { noTimestamp: true });

const signToken = (obj) => {
   const key = randomBytes(32).toString('hex');
   const iv = randomBytes(16).toString('hex');
   const id = randomBytes(8).toString('hex');
   const { iat, exp, ...custom } = obj;

   keyVectorMap.set(id, custom);

   console.log(keyVectorMap);

   // data = JSON.stringify(data);
   // data = cipher.update('data', 'utf-8', 'hex') + cipher.final('hex');

   console.log(iat, exp, custom);
};

signToken(token);

```

## Something to look into

6-05-2024 7:49 AM - A bit a code that I stumbled on.

```js
async function build() {
  const distDir = join(rootDir, 'dist');
  await createDir(distDir);

  // This caught my attention.
  const files = await import.meta.glob('src/**/*.ts', { eager: true });

  for (const file of files) {
    const name = file.replace(/^src\//, '').replace(/\.ts$/, '');
    const distFile = join(distDir, `${name}.js`);
    const code = await import(file);
    await createDir(distDir);
    await Deno.writeTextFile(distFile, code.default);
  }
}
```