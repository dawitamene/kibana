/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

export type {
  ManualPointEventAnnotationArgs,
  ManualPointEventAnnotationOutput,
  ManualRangeEventAnnotationArgs,
  ManualRangeEventAnnotationOutput,
  ManualRangeEventAnnotationRow,
  PointEventAnnotationRow,
} from './manual_event_annotation/types';
export type {
  QueryPointEventAnnotationArgs,
  QueryPointEventAnnotationOutput,
} from './query_point_event_annotation/types';
export { manualPointEventAnnotation, manualRangeEventAnnotation } from './manual_event_annotation';
export { queryPointEventAnnotation } from './query_point_event_annotation';
export { eventAnnotationGroup } from './event_annotation_group';
export type { EventAnnotationGroupArgs } from './event_annotation_group';

export type { FetchEventAnnotationsArgs } from './fetch_event_annotations/types';
export type { EventAnnotationOutput } from './types';

export type {
  EventAnnotationGroupGetIn,
  EventAnnotationGroupGetOut,
  EventAnnotationGroupSavedObjectAttributes,
  EventAnnotationGroupCreateIn,
  EventAnnotationGroupCreateOut,
  EventAnnotationGroupUpdateIn,
  EventAnnotationGroupSearchIn,
  EventAnnotationGroupSearchOut,
  EventAnnotationGroupDeleteIn,
  EventAnnotationGroupDeleteOut,
} from './content_management';
export { CONTENT_ID } from './content_management';
export { ANNOTATIONS_LISTING_VIEW_ID } from './constants';
