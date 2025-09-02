import { NextResponse } from "next/server";

const VALID_EMAIL = "shamalmaleesha750@gmail.com";
const VALID_PASSWORD = "12345678";

export const POST = async (request) => {
  try {
    const { email, password } = await request.json();
    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
      return NextResponse.json({
        success: true,
        message: "Login successful",
      });
    } else {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid email or password ",
        },
        {
          status: 401,
        }
      );
    }
  } catch (error) {
    console.error("Error processing login:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
      },
      {
        status: 500,
      }
    );
  }
};

// export const GET = async (request) => {
//   return NextResponse.json({
//     success: true,
//     message: "Login successful",
//   });
// };
