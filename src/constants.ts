/** Hidden marker to add to PR description. */
export const HIDDEN_MARKER = 'added_by_jira_lint';

/** Regex to check for the hidden marker in PR description to avoid adding jira-lint PR details
 * multiple times. */
export const MARKER_REGEX = new RegExp(HIDDEN_MARKER);

/**
 * Bot branch patters to avoid running jira-lint on.
 */
export const BOT_BRANCH_PATTERNS: RegExp[] = [/^dependabot/, /^all-contributors/];

/**
 * Default branch patterms to skip CI. Skip jira-lint when the HEAD ref matches one of these.
 */
export const DEFAULT_BRANCH_PATTERNS: RegExp[] = [/^master$/, /^production$/, /^gh-pages$/];

/**
 * Regex to match JIRA issue keys.
 */
export const JIRA_REGEX_MATCHER = /(^|(?<=\/))([a-zA-Z0-9]+-\d+)|([a-zA-Z0-9]+-\d+)$/g;

/**
 * Default reverted branch prefix pattern to be removed when checking for JIRA_REGEX_MATCHER
 */
export const REVERTED_BRANCH_MATCHER = /^revert-\d+-/gi;

/**
 * Default total maximum number of additions after which jira-lint will discourage the PR as it is
 * considered "too huge to review".
 */
export const DEFAULT_PR_ADDITIONS_THRESHOLD = 800;
