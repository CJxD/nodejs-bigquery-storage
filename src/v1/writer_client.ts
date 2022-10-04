// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

/* global window */

import {CallOptions, GoogleError, CancellableStream} from 'google-gax';

import * as protos from '../../protos/protos';
/**
 * Client JSON configuration object, loaded from
 * `src/v1/big_query_write_client_config.json`.
 * This file defines retry strategy and timeouts for all API methods in this library.
 */
//import * as gapicConfig from './big_query_write_client_config.json';

import {BigQueryWriteClient} from '.';
import {createParent, writeStreams} from './helpers_sandbox';

/**
 *  BigQuery Write API.
 *
 *  The Write API can be used to write data to BigQuery.
 *
 *  For supplementary information about the Write API, see:
 *  https://cloud.google.com/bigquery/docs/write-api
 * @class
 * @memberof v1
 */

enum StreamType {
  Type_Unspecified = 'TYPE_UNSPECIFIED',
  Committed = 'COMMITTED',
  Pending = 'PENDING',
  Buffered = 'BUFFERED',
}

type WriteStream = protos.google.cloud.bigquery.storage.v1.IWriteStream;
type AppendRowResponse =
  protos.google.cloud.bigquery.storage.v1.AppendRowsResponse;

export class WriterClient extends BigQueryWriteClient {
  private parent = 'projects/myProjectId/datasets/myDatasetId/tables/myTableId';

  /*
  @param {object} [fields]
  */
  constructor(parent?: string) {
    super();
    this.parent = parent || this.parent;
  }

  setParent = (projectId: string, datasetId: string, tableId: string): void => {
    const parent = `projects/${projectId}/datasets/${datasetId}/tables/${tableId}`;
    this.parent = parent;
  };

  createSerializedRows = (rowData: any[]) => {
    const serializedRows: any = [];
    rowData.forEach(entry => {
      serializedRows.push(entry.serializeBinary());
    });
    return serializedRows;
  };

  getWriteStreams = (writeStream: WriteStream): undefined | null | string[] => {
    if (writeStream === undefined || writeStream.name === undefined) {
      return undefined;
    }
    if (writeStream.name === null) {
      return null;
    }
    return new Array(writeStream.name);
  };

  async initializeWriteStream(
    clientOptions?: CallOptions,
    streamType?: StreamType
  ): Promise<CancellableStream> {
    const writer: BigQueryWriteClient = new BigQueryWriteClient();
    let writeStream: WriteStream;
    if (streamType) {
      writeStream = {type: streamType};
    }
    writeStream = {type: StreamType.Type_Unspecified};
    const request = {
      parent: this.parent,
      writeStream: writeStream,
    };
    const [response] = await writer.createWriteStream(request);
    if (![response]) {
      throw new GoogleError(`${response}`);
    }
    console.log(`Stream created: ${response.name}`);

    return writer.appendRows(clientOptions);
  }

  async appendRowsToStream(
    stream: CancellableStream,
    writeStream: WriteStream,
    serializedRows: Uint8Array[],
    offsetValue: number
  ): Promise<AppendRowResponse[]> {
    const responses: AppendRowResponse[] = [];
    stream.on('data', (response: any) => {
      // Check for errors.
      if (response.error) {
        throw new Error(response.error.message);
      }

      console.log(response);
      responses.push(response);

      // Close the stream when all responses have been received.
      if (responses.length === serializedRows.length) {
        stream.end();
      }
    });

    stream.on('error', err => {
      throw err;
    });

    const request = {
      writeStream,
      protoRows: {value: serializedRows},
      offset: {value: offsetValue},
    };
    stream.write(request);

    return responses;
  }
  closeStream(
    writer: BigQueryWriteClient,
    writeStream: WriteStream,
    parent: string
  ) {
    // API call completed.
    writer
      .finalizeWriteStream({
        name: writeStream.name,
      })
      .then(result => {
        if (!result.includes(undefined)) {
          const [validResponse] = result;
          console.log(`Row count: ${validResponse.rowCount}`);
        }
      });

    writer.batchCommitWriteStreams({
      parent,
      writeStreams: this.getWriteStreams(writeStream),
    });
  }
}
