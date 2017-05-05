//
//  HelpersFun.h
//  DragAndPopulateImageGalleryData
//
//  Created by Sacha Moo on 5/4/17.
//  Copyright © 2017 Sacha Moo. All rights reserved.
//

#ifndef HelpersFun_h
#define HelpersFun_h

#include <stdio.h>
#include <OHMySQL/mysql.h>
#include <string.h>
#include "HelperTools.h"
#include <stdio.h>

#endif /* HelpersFun_h */

// int insertBinaryFileIntoTableAndSubmit(MYSQL *connection, FILE *file, struct tableQueryData *queryData);
void createBinaryFileQuery(struct databaseConfiguration *config, struct tableQueryData *queryData);
void testDBQuery();
