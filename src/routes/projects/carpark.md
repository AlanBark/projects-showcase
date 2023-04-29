---
title: Multi-Threading in C
date: "27 April 2023"
category: [ "Showcase" ]
thumbnail: "/c.png"
description: "An exercise in multi-threading in C"
---

# Multi-Threading in C

For this article I'll be going through a project completed for my operating systems class, which involved implementing a multi-threaded solution to a problem in C.

If you'd like to see the full code, it's available [here](https://github.com/AlanBark/Multithreaded-Car-Manager).

## The Problem

We were tasked with simulating a (very fast) car park, which had a number of entry and exit points, and a number of parking spots. Shared memory was used to interface between the simulator controlling the cars, and the manager controlling the car park. There also had to be a funcitoning fire-alarm.

## Project Structure

The project was split into three parts, the car park manager, the car park simulator, and the fire alarm.

Each part was treated as its own project, with its own makefile, and its own executable.

## Makefiles

If you aren't familiar with make, this might seem like a lot, but I'll go over the main points for this project. If you'd like to learn more about make, I'd recommend [this tutorial](https://www.cs.colby.edu/maxwell/courses/tutorials/maketutor/).

```makefile
CC=gcc
CFLAGS=-Werror -Wall -pedantic -std=gnu99
LDFLAGS=-pthread -lrt -lm
```

So for starters, we have the compiler and linker flags, which are pretty standard for C. The only thing to note here is the `-pthread` flag, which is required for multi-threading in C. I've also included `-lrt` and `-lm`, which are required for shared memory and math functions respectively. I'm compiling with max warnings, and treating warnings as errors.

```makefile
TARGET_EXEC ?= simulator.out

BUILD_DIR ?= ./build/main
SRC_DIRS ?= ./src ../shared_memory
```

Next we're defining some variables for the build process. `TARGET_EXEC` is the name of the executable we're building, `BUILD_DIR` is the directory we're building to, and `SRC_DIRS` is the directories we're looking for source files in.

```makefile
SRCS := $(shell find $(SRC_DIRS) -name *.c)
OBJS := $(SRCS:%=$(BUILD_DIR)/%.o)
DEPS := $(OBJS:.o=.d)
```

Next we're defining the source files, object files, and dependency files. We look for any files within the `SRC_DIRS` defined above that ends in `.c` and assign that as a source file. We then define the object files as the source files with the build directory prepended, and the extension changed to `.o`. Finally, we define the dependency files as the object files with the extension `.d`.

```makefile
INC_DIRS := $(shell find $(SRC_DIRS) -type d)
INC_FLAGS := $(addprefix -I,$(INC_DIRS))

CPPFLAGS ?= $(INC_FLAGS) -MMD -MP
```

Next we define the include directories, and the include flags. We look for any directories within `SRC_DIRS` and assign that as an include directory. We then define the include flags as the include directories with `-I` prepended. Finally, we define the preprocessor flags as the include flags, as well as `-MMD` and `-MP`, which generate dependency files.

```makefile
../$(TARGET_EXEC): $(OBJS)
	$(CC) $(OBJS) -o $@ $(LDFLAGS)
```

Next we define the build process for the executable. We define the executable as the executable name with the build directory prepended. We then run the compiler to build the executable.

```makefile 
# c source
$(BUILD_DIR)/%.c.o: %.c
	$(MKDIR_P) $(dir $@)
	$(CC) $(CPPFLAGS) $(CFLAGS) -c $< -o $@
```

Next we define the build process for the object files. We define the object file as the source file with the build directory prepended, and the extension changed to `.o`. We then run the compiler to build the object file.

```makefile
.PHONY: clean

clean:
	$(RM) -r ./build

-include $(DEPS)
```

Finally, we define the clean process, which removes the build directory. We also include the dependency files.

Each directory has its own makefile, which is very similar to the one above, but with the `TARGET_EXEC` variable changed to the name of the executable for that directory.
The top level makefile then runs the makefiles for each directory, and builds the project, using syntax like this:

```makefile
all: simulator manager fire_alarm

simulator: 
	$(MAKE) -C simulator

etc...
```

## Shared Memory

Shared memory in C must be used in a very rigid way. There is no data abstraction available, so we must create that ourselves. Using several hundred magic numbers throughout our code wouldn't be the best idea, so before starting on any of the main processes, I created a shared memory directory (`shared_memory`, top level) to dump all struct definitions, as well as funcitons to create, destroy and modify those structs.

