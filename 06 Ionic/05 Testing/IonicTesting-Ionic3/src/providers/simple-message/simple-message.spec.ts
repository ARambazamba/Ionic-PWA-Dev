import { SimpleMessageProvider } from "./simple-message";

describe("Service-Testing: SimpleMessageProvider", () => {
  let service: SimpleMessageProvider;

  beforeEach(() => {});

  it("should have no messages to start", () => {
    service = new SimpleMessageProvider();

    expect(service.messages.length).toBe(0);
  });

  it("should add a message when add is called", () => {
    service = new SimpleMessageProvider();

    service.add("message1");

    expect(service.messages.length).toBe(1);
  });

  it("should remove all messages when clear is called", () => {
    service = new SimpleMessageProvider();
    service.add("message1");

    service.clear();

    expect(service.messages.length).toBe(0);
  });
});
