

export enum WebsocketClientEvent {
    TEST_FLOW_RUN_STARTED = 'TEST_FLOW_RUN_STARTED',
    TEST_FLOW_RUN_FINISHED = 'TEST_FLOW_RUN_FINISHED',
    GENERATE_CODE_FINISHED = 'GENERATE_CODE_FINIISHED',
    TEST_STEP_FINISHED = 'TEST_STEP_FINISHED',
}

export enum WebsocketServerEvent {
    TEST_STEP_RUN = 'TEST_STEP_RUN',
    GENERATE_CODE = 'GENERATE_CODE',
    TEST_FLOW_RUN = 'TEST_FLOW_RUN',
}
