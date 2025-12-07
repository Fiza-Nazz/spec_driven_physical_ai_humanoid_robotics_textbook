# Data Model: Documentation Section for Physical AI and Humanoid Robotics Book

## Entities

### 1. Concept

*   **Description**: Represents a theoretical or practical topic within physical AI or humanoid robotics.
*   **Attributes**:
    *   `id` (String): Unique identifier for the concept (e.g., "kinematics", "slam").
    *   `title` (String): Display name of the concept (e.g., "Robot Kinematics").
    *   `content` (Markdown): The explanatory text for the concept.
    *   `tags` (Array<String>): Keywords for categorization and search (e.g., "mechanics", "navigation").
    *   `prerequisites` (Array<String>): IDs of other Concepts required for understanding.
*   **Relationships**:
    *   One-to-many with `Hands-on Example` (a Concept can have multiple examples).
    *   Many-to-many with `Concept` (via `prerequisites`).

### 2. Hands-on Example

*   **Description**: A practical demonstration or exercise related to a Concept.
*   **Attributes**:
    *   `id` (String): Unique identifier for the example.
    *   `title` (String): Display name of the example.
    *   `associatedConceptId` (String): ID of the Concept this example illustrates.
    *   `codeSnippet` (Code Block): The actual code for the example.
    *   `setupInstructions` (Markdown): Steps to set up the environment for the example.
    *   `expectedOutput` (Text/Image): Description or visual of the expected result.
    *   `troubleshootingTips` (Markdown): Common issues and their resolutions.
    *   `environmentRequirements` (Array<String>): List of specific software/hardware needed.
*   **Relationships**:
    *   Many-to-one with `Concept`.
    *   Many-to-many with `Environment` (via `environmentRequirements`).

### 3. Reader

*   **Description**: The end-user consuming the documentation. Not directly stored in the system, but represented as an actor.
*   **Attributes**: None directly stored, but implied attributes include:
    *   `knowledgeLevel` (Enum: "Beginner", "Intermediate").
    *   `goals` (e.g., "Learn new skills", "Solve a problem").
*   **Relationships**: Interacts with `Concept` and `Hands-on Example`.

### 4. Environment

*   **Description**: Details specific software and hardware configurations necessary for executing hands-on examples.
*   **Attributes**:
    *   `id` (String): Unique identifier for an environment configuration (e.g., "ros-melodic-ubuntu18", "python3-opencv").
    *   `name` (String): Human-readable name.
    *   `operatingSystem` (String).
    *   `softwareDependencies` (Array<String>): List of software packages and versions.
    *   `hardwareRequirements` (Markdown): Description of required hardware (e.g., "Raspberry Pi 4", "specific robotic arm model").
*   **Relationships**:
    *   One-to-many with `Hands-on Example` (an Environment can support multiple examples).

## Relationships (Summary)

*   `Concept` is linked to `Hands-on Example` (one Concept can have many Examples).
*   `Hands-on Example` is linked to `Environment` (an Example requires one or more specific Environments).
*   `Reader` interacts with `Concept` and `Hands-on Example` within various `Environment`s.
