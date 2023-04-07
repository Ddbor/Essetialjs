export default {
  // 默认情况下，Jest运行所有测试，并在完成时将所有错误生成到控制台中。
  // 此处可以使用bail选项，使Jest在n失败后停止运行测试。 将bail设置为 true 等于将bail设置为 1。
  bail: false,

  // 指示是否应在运行期间报告每个单独的测试。 执行后，所有错误也仍会显示在底部。
  verbose: false,

  // 指出是否收集测试时的覆盖率信息。
  // 由于要带上覆盖率搜集语句重新访问所有执行过的文件，这可能会让你的测试执行速度被明显减慢。
  collectCoverage: false,

  // Jest 应该输出其覆盖文件的目录。
  coverageDirectory: 'coverage',

  // 这将用于配置覆盖率结果的最低阈值实施。
  // 阈值可以指定为全局、全局以及目录或文件路径。
  // 如果不满足阈值，jest 将失败。
  // 指定为正数的阈值被视为所需的最小百分比。
  // 指定为负数的阈值表示允许的未覆盖实体的最大数量。
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100
    }
  }
}
