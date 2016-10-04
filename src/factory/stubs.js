import sinon from 'sinon';

export default {

    stubs: [],

    /**
     * Get stub instance
     * @returns {sinon.stub}
     */
    get stub() {
        const stub = sinon.stub();
        this.stubs.push(stub);
        return stub;
    },

    /**
     * Reset all stubs
     */
    reset() {
        this.stubs.forEach(stub => stub.reset());
    },

    /**
     * Reset stubs data and behaviour
     */
    flush() {
        this.stubs.forEach(stub => {
            stub.reset();
            stub.resetBehavior();
        });
        this.stubs = [];
    }
};
