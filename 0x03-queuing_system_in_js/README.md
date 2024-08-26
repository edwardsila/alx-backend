# Redis Installation and Basic Usage Guide

This guide walks you through installing and setting up a Redis server, interacting with it using the Redis CLI, and managing the server process. You'll also learn how to set and retrieve data from Redis.

## Prerequisites

- A Unix-based operating system (Linux/macOS) or Windows with WSL.
- Basic knowledge of the terminal/command line.

## Instructions

Follow the steps below to install Redis, start the server, and perform basic operations.

```bash
# Step 1: Download the Latest Stable Redis Version
wget http://download.redis.io/releases/redis-6.0.10.tar.gz

# Step 2: Extract the Redis Archive
tar xzf redis-6.0.10.tar.gz

# Step 3: Navigate to the Redis Directory
cd redis-6.0.10

# Step 4: Compile Redis
make

# Step 5: Start Redis in the Background
src/redis-server &

# Step 6: Verify the Redis Server is Running
src/redis-cli ping

# Step 7: Set a Key-Value Pair in Redis
src/redis-cli set Holberton School

# Step 8: Retrieve the Value of the Key
src/redis-cli get Holberton

# Step 9: Find the Process ID of the Redis Server
PID=$(ps aux | grep '[r]edis-server' | awk '{print $2}')

# Step 10: Kill the Redis Server Process
kill $PID

# Step 11: Copy the dump.rdb File to Your Project Directory
# Replace /path/to/your/project with the actual path to your project
cp dump.rdb /path/to/your/project

# Step 12: Verify the Redis Setup
# Running the following command should return "School"
src/redis-cli get Holberton
