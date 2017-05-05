//
//  HelperTools.h
//  DragAndPopulateImageGalleryData
//
//  Created by Sacha Moo on 5/5/17.
//  Copyright © 2017 Sacha Moo. All rights reserved.
//

#ifndef HelperTools_h
#define HelperTools_h

#include <stdio.h>

#endif /* HelperTools_h */


struct databaseConfiguration {
    const char *host;
    const char *user;
    const char *password;
    const char *database;
    unsigned int port;
    const char *unix_socket;
    unsigned long client_flag;
};

struct tableQueryData {
    int id;
    const char *name;
    const char *description;
    const char *thumbnail_path;
    const char *imageurl;
};

typedef struct databaseConfiguration DATABASE_CONFIGURATION;
typedef struct tableQueryData TABLE_QUERY_DATA;
