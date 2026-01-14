/**
 * Validation middleware for authentication routes
 */

/**
 * Validate signup request
 */
export const validateSignup = (req, res, next) => {
  const { name, email, password } = req.body;
  const errors = [];

  // Name validation
  if (!name || typeof name !== 'string') {
    errors.push('Name is required and must be a string.');
  } else if (name.trim().length < 2) {
    errors.push('Name must be at least 2 characters long.');
  } else if (name.trim().length > 50) {
    errors.push('Name must not exceed 50 characters.');
  }

  // Email validation
  if (!email || typeof email !== 'string') {
    errors.push('Email is required and must be a string.');
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.push('Please provide a valid email address.');
    }
  }

  // Password validation
  if (!password || typeof password !== 'string') {
    errors.push('Password is required and must be a string.');
  } else if (password.length < 6) {
    errors.push('Password must be at least 6 characters long.');
  } else if (password.length > 128) {
    errors.push('Password must not exceed 128 characters.');
  }

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed.',
      errors,
    });
  }

  next();
};

/**
 * Validate login request
 */
export const validateLogin = (req, res, next) => {
  const { email, password } = req.body;
  const errors = [];

  // Email validation
  if (!email || typeof email !== 'string') {
    errors.push('Email is required and must be a string.');
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.push('Please provide a valid email address.');
    }
  }

  // Password validation
  if (!password || typeof password !== 'string') {
    errors.push('Password is required and must be a string.');
  }

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed.',
      errors,
    });
  }

  next();
};

/**
 * Validate profile update request
 */
export const validateProfileUpdate = (req, res, next) => {
  const { name, email } = req.body;
  const errors = [];

  // At least one field must be provided
  if (!name && !email) {
    return res.status(400).json({
      success: false,
      message: 'Please provide at least one field to update (name or email).',
    });
  }

  // Name validation (if provided)
  if (name !== undefined) {
    if (typeof name !== 'string') {
      errors.push('Name must be a string.');
    } else if (name.trim().length < 2) {
      errors.push('Name must be at least 2 characters long.');
    } else if (name.trim().length > 50) {
      errors.push('Name must not exceed 50 characters.');
    }
  }

  // Email validation (if provided)
  if (email !== undefined) {
    if (typeof email !== 'string') {
      errors.push('Email must be a string.');
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        errors.push('Please provide a valid email address.');
      }
    }
  }

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed.',
      errors,
    });
  }

  next();
};
