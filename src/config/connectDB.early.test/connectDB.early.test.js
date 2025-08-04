const { Sequelize } = require("sequelize");

// Import necessary modules
// Mock the Sequelize class
jest.mock("sequelize", () => {
  const authenticateMock = jest.fn();
  const SequelizeMock = jest.fn(() => ({
    authenticate: authenticateMock,
  }));

  return { Sequelize: SequelizeMock, authenticateMock };
});

describe("connectDB() connectDB method", () => {
  let authenticateMock;

  beforeEach(() => {
    // Reset the mock before each test
    authenticateMock = Sequelize.authenticateMock;
    authenticateMock.mockClear();
  });

  // Happy path tests
  describe("Happy Paths", () => {
    it("should successfully connect to the database", async () => {
      // Arrange: Set up the mock to resolve
      authenticateMock.mockResolvedValueOnce();

      // Act: Call the connectDB function
      await connectDB();

      // Assert: Ensure authenticate was called
      expect(authenticateMock).toHaveBeenCalledTimes(1);
      expect(console.log).toHaveBeenCalledWith(
        "Connection has been established successfully."
      );
    });
  });

  // Edge case tests
  describe("Edge Cases", () => {
    it("should handle authentication failure gracefully", async () => {
      // Arrange: Set up the mock to reject with an error
      const error = new Error("Connection failed");
      authenticateMock.mockRejectedValueOnce(error);

      // Spy on console.error to check error logging
      const consoleErrorSpy = jest
        .spyOn(console, "error")
        .mockImplementation(() => {});

      // Act: Call the connectDB function
      await connectDB();

      // Assert: Ensure authenticate was called and error was logged
      expect(authenticateMock).toHaveBeenCalledTimes(1);
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        "Unable to connect to the database:",
        error
      );

      // Clean up the spy
      consoleErrorSpy.mockRestore();
    });
  });
});
