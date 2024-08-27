#!/usr/bin/yarn dev
import { createClient, print } from 'redis';

const client = createClient();

client.on('connect', () => {
  console.log('Redis client connected to the server');
});

client.on('error', (err) => {
  console.log('Redis client not connected to the server:', err.toString());
});

function setHash(field, value) {
  client.hset('HolbertonSchools', field, value, print);
}

function getHash() {
  client.hgetall('HolbertonSchools', (err, reply) => {
    if (err) {
      console.error('Error retrieving hash:', err.toString());
    } else {
      console.log(reply);
    }
  });
}

setHash('Portland', '50');
setHash('Seattle', '80');
setHash('New York', '20');
setHash('Bogota', '20');
setHash('Cali', '40');
setHash('Paris', '2');

getHash();
