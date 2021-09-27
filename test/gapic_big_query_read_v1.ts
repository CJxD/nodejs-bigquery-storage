// Copyright 2021 Google LLC
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

import * as protos from '../protos/protos';
import * as assert from 'assert';
import * as sinon from 'sinon';
import {SinonStub} from 'sinon';
import {describe, it} from 'mocha';
import * as bigqueryreadModule from '../src';

import {PassThrough} from 'stream';

import {protobuf} from 'google-gax';

function generateSampleMessage<T extends object>(instance: T) {
  const filledObject = (
    instance.constructor as typeof protobuf.Message
  ).toObject(instance as protobuf.Message<T>, {defaults: true});
  return (instance.constructor as typeof protobuf.Message).fromObject(
    filledObject
  ) as T;
}

function stubSimpleCall<ResponseType>(response?: ResponseType, error?: Error) {
  return error
    ? sinon.stub().rejects(error)
    : sinon.stub().resolves([response]);
}

function stubSimpleCallWithCallback<ResponseType>(
  response?: ResponseType,
  error?: Error
) {
  return error
    ? sinon.stub().callsArgWith(2, error)
    : sinon.stub().callsArgWith(2, null, response);
}

function stubServerStreamingCall<ResponseType>(
  response?: ResponseType,
  error?: Error
) {
  const transformStub = error
    ? sinon.stub().callsArgWith(2, error)
    : sinon.stub().callsArgWith(2, null, response);
  const mockStream = new PassThrough({
    objectMode: true,
    transform: transformStub,
  });
  // write something to the stream to trigger transformStub and send the response back to the client
  setImmediate(() => {
    mockStream.write({});
  });
  setImmediate(() => {
    mockStream.end();
  });
  return sinon.stub().returns(mockStream);
}

describe('v1.BigQueryReadClient', () => {
  it('has servicePath', () => {
    const servicePath = bigqueryreadModule.v1.BigQueryReadClient.servicePath;
    assert(servicePath);
  });

  it('has apiEndpoint', () => {
    const apiEndpoint = bigqueryreadModule.v1.BigQueryReadClient.apiEndpoint;
    assert(apiEndpoint);
  });

  it('has port', () => {
    const port = bigqueryreadModule.v1.BigQueryReadClient.port;
    assert(port);
    assert(typeof port === 'number');
  });

  it('should create a client with no option', () => {
    const client = new bigqueryreadModule.v1.BigQueryReadClient();
    assert(client);
  });

  it('should create a client with gRPC fallback', () => {
    const client = new bigqueryreadModule.v1.BigQueryReadClient({
      fallback: true,
    });
    assert(client);
  });

  it('has initialize method and supports deferred initialization', async () => {
    const client = new bigqueryreadModule.v1.BigQueryReadClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    assert.strictEqual(client.bigQueryReadStub, undefined);
    await client.initialize();
    assert(client.bigQueryReadStub);
  });

  it('has close method', () => {
    const client = new bigqueryreadModule.v1.BigQueryReadClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    client.close();
  });

  it('has getProjectId method', async () => {
    const fakeProjectId = 'fake-project-id';
    const client = new bigqueryreadModule.v1.BigQueryReadClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    client.auth.getProjectId = sinon.stub().resolves(fakeProjectId);
    const result = await client.getProjectId();
    assert.strictEqual(result, fakeProjectId);
    assert((client.auth.getProjectId as SinonStub).calledWithExactly());
  });

  it('has getProjectId method with callback', async () => {
    const fakeProjectId = 'fake-project-id';
    const client = new bigqueryreadModule.v1.BigQueryReadClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    client.auth.getProjectId = sinon
      .stub()
      .callsArgWith(0, null, fakeProjectId);
    const promise = new Promise((resolve, reject) => {
      client.getProjectId((err?: Error | null, projectId?: string | null) => {
        if (err) {
          reject(err);
        } else {
          resolve(projectId);
        }
      });
    });
    const result = await promise;
    assert.strictEqual(result, fakeProjectId);
  });

  describe('createReadSession', () => {
    it('invokes createReadSession without error', async () => {
      const client = new bigqueryreadModule.v1.BigQueryReadClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.bigquery.storage.v1.CreateReadSessionRequest()
      );
      request.readSession = {};
      request.readSession.table = '';
      const expectedHeaderRequestParams = 'read_session.table=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.bigquery.storage.v1.ReadSession()
      );
      client.innerApiCalls.createReadSession = stubSimpleCall(expectedResponse);
      const [response] = await client.createReadSession(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.createReadSession as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes createReadSession without error using callback', async () => {
      const client = new bigqueryreadModule.v1.BigQueryReadClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.bigquery.storage.v1.CreateReadSessionRequest()
      );
      request.readSession = {};
      request.readSession.table = '';
      const expectedHeaderRequestParams = 'read_session.table=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.bigquery.storage.v1.ReadSession()
      );
      client.innerApiCalls.createReadSession =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.createReadSession(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.bigquery.storage.v1.IReadSession | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.createReadSession as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes createReadSession with error', async () => {
      const client = new bigqueryreadModule.v1.BigQueryReadClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.bigquery.storage.v1.CreateReadSessionRequest()
      );
      request.readSession = {};
      request.readSession.table = '';
      const expectedHeaderRequestParams = 'read_session.table=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.createReadSession = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.createReadSession(request), expectedError);
      assert(
        (client.innerApiCalls.createReadSession as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });
  });

  describe('splitReadStream', () => {
    it('invokes splitReadStream without error', async () => {
      const client = new bigqueryreadModule.v1.BigQueryReadClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.bigquery.storage.v1.SplitReadStreamRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.bigquery.storage.v1.SplitReadStreamResponse()
      );
      client.innerApiCalls.splitReadStream = stubSimpleCall(expectedResponse);
      const [response] = await client.splitReadStream(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.splitReadStream as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes splitReadStream without error using callback', async () => {
      const client = new bigqueryreadModule.v1.BigQueryReadClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.bigquery.storage.v1.SplitReadStreamRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.bigquery.storage.v1.SplitReadStreamResponse()
      );
      client.innerApiCalls.splitReadStream =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.splitReadStream(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.bigquery.storage.v1.ISplitReadStreamResponse | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.splitReadStream as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes splitReadStream with error', async () => {
      const client = new bigqueryreadModule.v1.BigQueryReadClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.bigquery.storage.v1.SplitReadStreamRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.splitReadStream = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.splitReadStream(request), expectedError);
      assert(
        (client.innerApiCalls.splitReadStream as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });
  });

  describe('readRows', () => {
    it('invokes readRows without error', async () => {
      const client = new bigqueryreadModule.v1.BigQueryReadClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.bigquery.storage.v1.ReadRowsRequest()
      );
      request.readStream = '';
      const expectedHeaderRequestParams = 'read_stream=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.bigquery.storage.v1.ReadRowsResponse()
      );
      client.innerApiCalls.readRows = stubServerStreamingCall(expectedResponse);
      const stream = client.readRows(request);
      const promise = new Promise((resolve, reject) => {
        stream.on(
          'data',
          (
            response: protos.google.cloud.bigquery.storage.v1.ReadRowsResponse
          ) => {
            resolve(response);
          }
        );
        stream.on('error', (err: Error) => {
          reject(err);
        });
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.readRows as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions)
      );
    });

    it('invokes readRows with error', async () => {
      const client = new bigqueryreadModule.v1.BigQueryReadClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.bigquery.storage.v1.ReadRowsRequest()
      );
      request.readStream = '';
      const expectedHeaderRequestParams = 'read_stream=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.readRows = stubServerStreamingCall(
        undefined,
        expectedError
      );
      const stream = client.readRows(request);
      const promise = new Promise((resolve, reject) => {
        stream.on(
          'data',
          (
            response: protos.google.cloud.bigquery.storage.v1.ReadRowsResponse
          ) => {
            resolve(response);
          }
        );
        stream.on('error', (err: Error) => {
          reject(err);
        });
      });
      await assert.rejects(promise, expectedError);
      assert(
        (client.innerApiCalls.readRows as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions)
      );
    });
  });

  describe('Path templates', () => {
    describe('project', () => {
      const fakePath = '/rendered/path/project';
      const expectedParameters = {
        project: 'projectValue',
      };
      const client = new bigqueryreadModule.v1.BigQueryReadClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.projectPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.projectPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('projectPath', () => {
        const result = client.projectPath('projectValue');
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.projectPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromProjectName', () => {
        const result = client.matchProjectFromProjectName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.projectPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('readSession', () => {
      const fakePath = '/rendered/path/readSession';
      const expectedParameters = {
        project: 'projectValue',
        location: 'locationValue',
        session: 'sessionValue',
      };
      const client = new bigqueryreadModule.v1.BigQueryReadClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.readSessionPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.readSessionPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('readSessionPath', () => {
        const result = client.readSessionPath(
          'projectValue',
          'locationValue',
          'sessionValue'
        );
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.readSessionPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromReadSessionName', () => {
        const result = client.matchProjectFromReadSessionName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.readSessionPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchLocationFromReadSessionName', () => {
        const result = client.matchLocationFromReadSessionName(fakePath);
        assert.strictEqual(result, 'locationValue');
        assert(
          (client.pathTemplates.readSessionPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchSessionFromReadSessionName', () => {
        const result = client.matchSessionFromReadSessionName(fakePath);
        assert.strictEqual(result, 'sessionValue');
        assert(
          (client.pathTemplates.readSessionPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('readStream', () => {
      const fakePath = '/rendered/path/readStream';
      const expectedParameters = {
        project: 'projectValue',
        location: 'locationValue',
        session: 'sessionValue',
        stream: 'streamValue',
      };
      const client = new bigqueryreadModule.v1.BigQueryReadClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.readStreamPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.readStreamPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('readStreamPath', () => {
        const result = client.readStreamPath(
          'projectValue',
          'locationValue',
          'sessionValue',
          'streamValue'
        );
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.readStreamPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromReadStreamName', () => {
        const result = client.matchProjectFromReadStreamName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.readStreamPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchLocationFromReadStreamName', () => {
        const result = client.matchLocationFromReadStreamName(fakePath);
        assert.strictEqual(result, 'locationValue');
        assert(
          (client.pathTemplates.readStreamPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchSessionFromReadStreamName', () => {
        const result = client.matchSessionFromReadStreamName(fakePath);
        assert.strictEqual(result, 'sessionValue');
        assert(
          (client.pathTemplates.readStreamPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchStreamFromReadStreamName', () => {
        const result = client.matchStreamFromReadStreamName(fakePath);
        assert.strictEqual(result, 'streamValue');
        assert(
          (client.pathTemplates.readStreamPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('table', () => {
      const fakePath = '/rendered/path/table';
      const expectedParameters = {
        project: 'projectValue',
        dataset: 'datasetValue',
        table: 'tableValue',
      };
      const client = new bigqueryreadModule.v1.BigQueryReadClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.tablePathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.tablePathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('tablePath', () => {
        const result = client.tablePath(
          'projectValue',
          'datasetValue',
          'tableValue'
        );
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.tablePathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromTableName', () => {
        const result = client.matchProjectFromTableName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.tablePathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchDatasetFromTableName', () => {
        const result = client.matchDatasetFromTableName(fakePath);
        assert.strictEqual(result, 'datasetValue');
        assert(
          (client.pathTemplates.tablePathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchTableFromTableName', () => {
        const result = client.matchTableFromTableName(fakePath);
        assert.strictEqual(result, 'tableValue');
        assert(
          (client.pathTemplates.tablePathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('writeStream', () => {
      const fakePath = '/rendered/path/writeStream';
      const expectedParameters = {
        project: 'projectValue',
        dataset: 'datasetValue',
        table: 'tableValue',
        stream: 'streamValue',
      };
      const client = new bigqueryreadModule.v1.BigQueryReadClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.writeStreamPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.writeStreamPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('writeStreamPath', () => {
        const result = client.writeStreamPath(
          'projectValue',
          'datasetValue',
          'tableValue',
          'streamValue'
        );
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.writeStreamPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromWriteStreamName', () => {
        const result = client.matchProjectFromWriteStreamName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.writeStreamPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchDatasetFromWriteStreamName', () => {
        const result = client.matchDatasetFromWriteStreamName(fakePath);
        assert.strictEqual(result, 'datasetValue');
        assert(
          (client.pathTemplates.writeStreamPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchTableFromWriteStreamName', () => {
        const result = client.matchTableFromWriteStreamName(fakePath);
        assert.strictEqual(result, 'tableValue');
        assert(
          (client.pathTemplates.writeStreamPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchStreamFromWriteStreamName', () => {
        const result = client.matchStreamFromWriteStreamName(fakePath);
        assert.strictEqual(result, 'streamValue');
        assert(
          (client.pathTemplates.writeStreamPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });
  });
});
